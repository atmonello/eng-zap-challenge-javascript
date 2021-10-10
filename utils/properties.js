function checkPropertyInsideBoundingBox(propertyLatitude, propertyLongitude) {
  const minLongitude = -46.693419;
  const maxLongitude = -46.641146;

  const minLatitude = -23.568704;
  const maxLatitude = -23.546686;

  return (
    minLongitude >= propertyLongitude &&
    maxLongitude <= propertyLongitude &&
    minLatitude >= propertyLatitude &&
    maxLatitude <= propertyLatitude
  );
}

export const zapValidation = {
  minSalePrice: 600000,
  minRentalPrice: 3500,
  processProperties(list, property) {
    const {
      lat: propertyLatitude,
      lon: propertyLongitude,
    } = property.address.geoLocation.location;

    const {
      businessType,
      price: propertySalePrice = 0,
      rentalTotalPrice: propertyRentalPrice = 0,
    } = property.pricingInfos;

    if (businessType === "RENTAL") {
      if (propertyRentalPrice >= zapValidation.minRentalPrice) {
        return {
          properties: [...list.properties, property],
          rental: [...list.rental, property],
          sale: list.sale,
        };
      }
      return list;
    } else {
      if (
        zapValidation.validateUsableAreaPrice(
          property.usableAreas,
          propertySalePrice
        ) ||
        zapValidation.validateSalePriceInsideBoundingBox(
          propertyLatitude,
          propertyLongitude,
          propertySalePrice
        ) ||
        propertySalePrice >= zapValidation.minSalePrice
      ) {
        return {
          properties: [...list.properties, property],
          rental: list.rental,
          sale: [...list.sale, property],
        };
      }
      return list;
    }
  },
  validateUsableAreaPrice(usableAreas, salePrice) {
    return usableAreas > 0 && salePrice / usableAreas > 3500;
  },
  validateSalePriceInsideBoundingBox(
    propertyLatitude,
    propertyLongitude,
    salePrice
  ) {
    return (
      checkPropertyInsideBoundingBox(propertyLatitude, propertyLongitude) &&
      salePrice >= zapValidation.minSalePrice * 0.9
    );
  },
};

export const vivaValidation = {
  maxSalePrice: 700000,
  maxRentalPrice: 4000,
  processProperties(list, property) {
    const {
      monthlyCondoFee,
      price: propertySalePrice = 0,
      rentalTotalPrice: propertyRentalPrice = 0,
      businessType,
    } = property.pricingInfos;

    const {
      lon: propertyLongitude,
      lat: propertyLatitude,
    } = property.address.geoLocation.location;

    if (
      businessType === "SALE" &&
      propertySalePrice <= vivaValidation.maxSalePrice
    ) {
      return {
        properties: [...list.properties, property],
        sale: [...list.sale, property],
        rental: list.rental,
      };
    } else if (businessType === "RENTAL" && !isNaN(Number(monthlyCondoFee))) {
      const isPropertyInsideBoundingBox = checkPropertyInsideBoundingBox(
        propertyLatitude,
        propertyLongitude
      );
      const validRentalPrice =
        propertyRentalPrice <=
        vivaValidation.maxRentalPrice * (isPropertyInsideBoundingBox ? 1.5 : 1);
      const validCondoFee = monthlyCondoFee < propertyRentalPrice * 0.3;

      if (validRentalPrice && validCondoFee) {
        return {
          properties: [...list.properties, property],
          rental: [...list.rental, property],
          sale: list.sale,
        };
      }
    }

    return list;
  },
};
