import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function defaultState(){
  return {
    R: 0,
    I: 0,
    A: 0, 
    S: 0,
    E: 0,
    C: 0,
  }
}

export default new Vuex.Store({
  state: defaultState(),
  mutations: {
    increment (state, key){
      state[key]++;
    },
    resetState(state){
      Object.assign(state, defaultState())
    }
  },
  // actions: {
  // },
  // modules: {
  // }
})
