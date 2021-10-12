export default function ({ $axios }, inject) {
  const zap = $axios.create({
    baseURL:
      "http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/",
  });
  const address = $axios.create({
    baseURL: "http://api.positionstack.com/v1/",
  });

  address.interceptors.request.use((config) => {
    const addressApiToken = "4a21de2d5943b09c46c7540256f37897"; // only for development purposes
    config.params = { ...config.params, access_key: addressApiToken };
    return config;
  });

  address.buildGeoToAddressUrl = function (lat, long) {
    return `/reverse?query=${lat},${long}`;
  };

  inject("zapApi", zap);
  inject("addressApi", address);
}
