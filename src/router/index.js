import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IntroGame from '../views/IntroGame.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play',
    name: 'Play',
    component: function () {
      return import('../views/Play.vue')
    }
  },
  {
    path: '/intro',
    name: 'Intro',
    component: function () {
      return import('../views/IntroGame.vue')
    }
  },
  {
    path: '/results',
    name: 'Results',
    component: function () {
      return import('../views/Results.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
