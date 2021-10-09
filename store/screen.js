export const state = () => ({
  blocked: false,
  theme: "light",
});

export const mutations = {
  setBlocked(state, change) {
    state.blocked = change;
  },
  setTheme(state, change) {
    state.theme = change;
  },
};

export const actions = {
  blockScreen({ commit }) {
    commit("setBlocked", true);
  },
  unblockScreen({ commit }) {
    commit("setBlocked", false);
  },
  setLightTheme({ commit }) {
    commit("setTheme", "light");
  },
  setDarkTheme({ commit }) {
    commit("setTheme", "dark");
  },
};

export const getters = {
  isDarkTheme(state) {
    return state.theme === "dark";
  },
  isLightTheme(state) {
    return state.theme === "light";
  },
  isBlockedScreen(state) {
    return state.blocked;
  },
};
