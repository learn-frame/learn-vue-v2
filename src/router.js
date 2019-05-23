import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import routePaths from '@/constants/routePaths';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: routePaths.home.path,
      name: routePaths.home.name,
      component: Home
    },
    {
      path: routePaths.vuex.path,
      name: routePaths.vuex.name,
      component: () => import(/* webpackChunkName: "vuex" */ '@/views/Vuex.vue')
    },
    {
      path: routePaths.vuex2.path,
      name: routePaths.vuex2.name,
      component: () =>
        import(/* webpackChunkName: "vuex2" */ '@/views/Vuex2.vue')
    },
    {
      path: routePaths.vshowif.path,
      name: routePaths.vshowif.name,
      component: () =>
        import(/* webpackChunkName: "vshowif" */ '@/views/VShowIf.vue')
    },
    {
      path: routePaths.use.path,
      name: routePaths.use.name,
      component: () => import(/* webpackChunkName: "use" */ '@/views/Use.vue')
    },
    {
      path: routePaths.interview.path,
      name: routePaths.interview.name,
      component: () =>
        import(/* webpackChunkName: "interview" */ '@/views/Interview.vue')
    },
    {
      path: routePaths.uiComponent.path,
      name: routePaths.uiComponent.name,
      component: () =>
        import(/* webpackChunkName: "ui-component" */ '@/views/UIComponent.vue')
    },
    {
      path: routePaths.slot.path,
      name: routePaths.slot.name,
      component: () =>
        import(/* webpackChunkName: "slot" */ '@/views/LearnSlot.vue')
    },
    {
      path: routePaths.router.path,
      name: routePaths.router.name,
      component: () =>
        import(/* webpackChunkName: "router" */ '@/views/Route.vue'),
      children: [
        {
          path: 'child',
          name: 'child',
          component: () =>
            import(/* webpackChunkName: "child" */ '@/views/ChildPage.vue')
        }
      ],
      meta: { requiresAuth: true }
    },
    {
      path: routePaths.dynamicRouter.path,
      name: routePaths.dynamicRouter.name,
      component: () =>
        import(
          /* webpackChunkName: "dynamic-route" */ '@/views/DynamicRoute.vue'
        )
    },
    {
      // 404
      path: '*',
      component: () =>
        import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue')
    }
  ]
});

// redirect 当用户访问 /a 时，URL 将会被替换成 /b，然后匹配路由为 /b
// alias    当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a

// vueRouter.beforeEach((to, from, next) => {
//   const nextRoute = ['account', 'order', 'course'];
//   const auth = store.state.auth;
//   //跳转至上述3个页面
//   if (nextRoute.includes(to.name)) {
//     //未登录
//     if (!auth.IsLogin) {
//       vueRouter.push({ name: 'login' });
//     }
//   }
//   next();
// });
