export const namespaced = true;

export const state = {
  user: "",
  score: 0,
};

export const mutations = {
  SET_NEW_USER(state, name) {
    state.user = name;
  },
};

export const actions = {
  setNewUser({ commit }, name) {
    commit("SET_NEW_USER", name);
  },
};
