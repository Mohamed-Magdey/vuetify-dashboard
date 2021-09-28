import Vue from "vue";
import Vuex from "vuex";

import * as user from "./modules/user";
import * as question from "./modules/question";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    question,
  },
});
