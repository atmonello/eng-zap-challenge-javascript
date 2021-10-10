import { zapValidation, vivaValidation } from "@/utils/properties";

export const state = {
  properties: [],
};

export const mutations = {
  setProperties(state, change) {
    state.properties = change;
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
  listPropertiesById(state, getters) {
    return getters.listProperties.reduce(
      (properties, property) => ({
        ...properties,
        [property.id]: property,
      }),
      {}
    );
  },
  listZapProperties(state, getters) {
    return getters.listProperties.reduce(zapValidation.processProperties, {
      properties: [],
      rental: [],
      sale: [],
    });
  },
  listVivaProperties(state, getters) {
    return getters.listProperties.reduce(vivaValidation.processProperties, {
      properties: [],
      rental: [],
      sale: [],
    });
  },
};
