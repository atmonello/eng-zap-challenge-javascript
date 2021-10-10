import { zapValidation } from "@/utils/properties";

export const state = {
  properties: [],
  propertiesById: {},
};

export const mutations = {
  setProperties(state, change) {
    state.properties = change;
    state.propertiesById = change.reduce(
      (properties, property) => ({
        ...properties,
        [property.id]: property,
      }),
      {}
    );
  },
};

export const actions = {
  async getProperties({ commit }) {
    const { data } = await this.$axios.get("/source-1.json");
    commit("setProperties", data);
  },
};

export const getters = {
  listProperties(state) {
    return state.properties.filter((p) => {
      return (
        p.address.geoLocation.location.lon !== 0 &&
        p.address.geoLocation.location.lat !== 0 &&
        !!p.address.city.length
      );
    });
  },
  listZapProperties(state, getters) {
    return getters.listProperties.reduce(zapValidation.processProperties, {
      properties: [],
      rental: [],
      sale: [],
    });
  },
};
