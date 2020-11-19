import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profiles from '../views/Profiles.vue'
import Dogslist from '../views/Dogslist.vue'
import Walkerz from '../views/Walkerz.vue'
import Locator from '../views/Locator.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profiles',
    name: 'Profiles',
    component: Profiles
  },
  {
    path: '/dogslist',
    name: 'Dogslist',
    component: Dogslist
  },
  {
    path: '/walkerz',
    name: 'Walkerz',
    component: Walkerz
  },
  {
    path: '/locator',
    name: 'Locator',
    component: Locator
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
