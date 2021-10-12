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

    const { businessType, price = 0 } = property.pricingInfos;

    const validRentalPrice = price >= zapValidation.minRentalPrice;

    if (businessType === "RENTAL" && validRentalPrice) {
      return {
        properties: [...list.properties, property],
        rental: [...list.rental, property],
        sale: list.sale,
      };
    } else if (businessType === "SALE" && property.usableAreas > 0) {
      const isPropertyInsideBoundingBox = checkPropertyInsideBoundingBox(
        propertyLatitude,
        propertyLongitude
      );
      const validateSalePrice =
        price >=
        zapValidation.minRentalPrice * (isPropertyInsideBoundingBox ? 0.9 : 1);
      const validateUsableAreaPrice = price / property.usableAreas > 3500;
      if (validateUsableAreaPrice && validateSalePrice) {
        return {
          properties: [...list.properties, property],
          sale: [...list.sale, property],
          rental: list.rental,
        };
      }
    }
    return list;
  },
};

export const vivaValidation = {
  maxSalePrice: 700000,
  maxRentalPrice: 4000,
  processProperties(list, property) {
    const { monthlyCondoFee, price = 0, businessType } = property.pricingInfos;

    const {
      lon: propertyLongitude,
      lat: propertyLatitude,
    } = property.address.geoLocation.location;

    if (businessType === "SALE" && price <= vivaValidation.maxSalePrice) {
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
        price <=
        vivaValidation.maxRentalPrice * (isPropertyInsideBoundingBox ? 1.5 : 1);
      const validCondoFee = monthlyCondoFee < price * 0.3;

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

export function formatPrice(
  val,
  precision = 2,
  decimal = ",",
  separator = ".",
  prefix = "R$"
) {
  const formatted = `${prefix}${Number(val)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+\.)/g, `$&${separator}`)
    .replace(/\.([^\\.]*)$/, `${decimal}$1`)}`;
  return precision > 0 ? formatted : formatted.split(decimal)[0];
}
