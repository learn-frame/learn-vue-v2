import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/vue-router',
    name: 'VueRouter',
    component: () =>
      import(/* webpackChunkName: "vue-router" */ '../views/VueRouter.vue'),
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import(/* webpackChunkName: "vuex" */ '../views/Vuex.vue'),
  },
  {
    path: '/e2e',
    name: 'E2E',
    component: () => import(/* webpackChunkName: "e2e" */ '../views/E2E.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
