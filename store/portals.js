export const state = {
  portals: {
    1: {
      name: "Zap",
      slug: "zap",
      logo: "/logo-zap.png",
      color: "grey lighten-5",
    },
    2: {
      name: "VivaReal",
      slug: "viva",
      logo: "/logo-vivareal.png",
      color: "vivaRealBlue",
    },
  },
};

export const getters = {
  getPortals(state) {
    return Object.values(state.portals);
  },
  getZap(state, getters) {
    return getters.getPortals.filter((p) => p.slug === "zap");
  },
  getVivaReal(state, getters) {
    return getters.getPortals.filter((p) => p.slug === "zap");
  },
};
