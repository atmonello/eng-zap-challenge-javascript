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
      slug: "vivareal",
      logo: "/logo-vivareal.png",
      color: "vivaRealBlue",
    },
  },
};

export const getters = {
  listPortals(state) {
    return Object.values(state.portals);
  },
  getZap(state, getters) {
    return getters.listPortals.filter((p) => p.slug === "zap");
  },
  getVivaReal(state, getters) {
    return getters.listPortals.filter((p) => p.slug === "zap");
  },
};
