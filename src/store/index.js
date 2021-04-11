import Vue from 'vue';
import Vuex from 'vuex';
import storePlans from './storePlans/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    storePlans,
  },
});
