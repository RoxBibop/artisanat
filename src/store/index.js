import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    A: 0,
    C: 0,
    E: 0,
    I: 0,
    R: 0,
    S: 0,
  },
  mutations: {
    increment (state, key){
      state[key]++;
    },
  },
  // actions: {
  // },
  // modules: {
  // }
})
