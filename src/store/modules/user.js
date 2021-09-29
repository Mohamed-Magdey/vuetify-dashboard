export const namespaced = true;

export const state = {
  user: "",
  score: 0,
};

export const mutations = {
  SET_NEW_USER(state, name) {
    state.user = name;
  },
  REMOVE_USER(state) {
    state.user = "";
  },
  INCREMENT_SCORE(state) {
    state.score += 2;
  },
};

export const actions = {
  setNewUser({ commit }, name) {
    commit("SET_NEW_USER", name);
  },
  removeUser({ commit }) {
    commit("REMOVE_USER");
  },
  incrementScore({ commit }) {
    commit("INCREMENT_SCORE");
  },
};
