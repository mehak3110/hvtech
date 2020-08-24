import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OurStartups from '../views/OurStartups.vue'
import OurGames from '../views/OurGames.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ourStartups',
    name: 'OurStartups',
    component: OurStartups
  },
  {
    path: '/ourGames',
    name: 'OurGames',
    component: OurGames
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
