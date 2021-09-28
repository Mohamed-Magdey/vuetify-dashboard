import questionService from "../../services/questionService";

export const namespaced = true;

export const state = {
  questions: [],
};

export const mutations = {
  SET_QUESTIONS(state, questions) {
    state.questions = questions;
  },
};

export const actions = {
  fetchQuestions({ commit }) {
    return questionService.getQuestions().then((res) => {
      commit("SET_QUESTIONS", res.data);
    });
  },
};
