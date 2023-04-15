import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activePagination: 3,
  },
  getters: {
    activePagination: (state) => state.activePagination,
  },
  mutations: {
    SET_ACTIVE_PAGINATION: (state, pagination) => {
      state.activePagination = pagination;
    },
  },
  actions: {
    setActivePagination: ({ commit }, pagination) => {
      commit("SET_ACTIVE_PAGINATION", pagination);
    },
  },
  modules: {},
});
