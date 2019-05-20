import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import(/* webpackChunkName: "vuex" */ './views/Vuex.vue')
    },
    {
      path: '/vuex2',
      name: 'vuex2',
      component: () => import(/* webpackChunkName: "vuex2" */ './views/Vuex2.vue')
    },
    {
      path: '/vshowif',
      name: 'vshowif',
      component: () =>
        import(/* webpackChunkName: "vshowif" */ './views/VShowIf.vue')
    },
  ]
});
