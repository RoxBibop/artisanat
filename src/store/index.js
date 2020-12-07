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
    S: 0
  },
  mutations: {
    incrementA (state){
      state.A++;
      console.log("A : " + state.A)
    },
    incrementC (state){
      state.C++;
      console.log("C : " + state.C)
    },
    incrementE (state){
      state.E++;
      console.log("E : " + state.E)
    },
    incrementI (state){
      state.I++;
      console.log("I : " + state.I)
    },
    incrementR (state){
      state.R++;
      console.log("R : " + state.R)
    },
    incrementS (state){
      state.S++;
      console.log("S : " + state.S)
    }
  },
  // actions: {
  // },
  // modules: {
  // }
})
