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
    const { lat: propertyLatitude, lon: propertyLongitude } =
      property.address.geoLocation.location;

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
