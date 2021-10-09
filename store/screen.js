export const state = () => ({
  blocked: false,
});

export const mutations = {
  setBlocked(state, change) {
    state.blocked = change;
  },
};

export const actions = {
  blockScreen({ commit }) {
    commit("setBlocked", true);
  },
  unblockScreen({ commit }) {
    commit("setBlocked", false);
  },
};
