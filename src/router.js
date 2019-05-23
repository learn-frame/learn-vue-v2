import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import routePath from './constants/routePath';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: routePath.home.path,
      name: routePath.home.name,
      component: Home
    },
    {
      path: routePath.vuex.path,
      name: routePath.vuex.name,
      component: () => import(/* webpackChunkName: "vuex" */ './views/Vuex.vue')
    },
    {
      path: routePath.vuex2.path,
      name: routePath.vuex2.name,
      component: () =>
        import(/* webpackChunkName: "vuex2" */ './views/Vuex2.vue')
    },
    {
      path: routePath.vshowif.path,
      name: routePath.vshowif.name,
      component: () =>
        import(/* webpackChunkName: "vshowif" */ './views/VShowIf.vue')
    },
    {
      path: routePath.use.path,
      name: routePath.use.name,
      component: () => import(/* webpackChunkName: "use" */ './views/Use.vue')
    },
    {
      path: routePath.interview.path,
      name: routePath.interview.name,
      component: () =>
        import(/* webpackChunkName: "interview" */ './views/Interview.vue')
    },
    {
      path: routePath.uiComponent.path,
      name: routePath.uiComponent.name,
      component: () =>
        import(/* webpackChunkName: "ui-component" */ './views/UIComponent.vue')
    },
    {
      path: routePath.slot.path,
      name: routePath.slot.name,
      component: () =>
        import(/* webpackChunkName: "slot" */ './views/LearnSlot.vue')
    },
    {
      path: routePath.router.path,
      name: routePath.router.name,
      component: () =>
        import(/* webpackChunkName: "router" */ './views/Route.vue'),
      children: [
        {
          path: 'child',
          name: 'child',
          component: () =>
            import(/* webpackChunkName: "child" */ './views/ChildPage.vue')
        }
      ],
      meta: { requiresAuth: true }
    },
    {
      path: routePath.dynamicRouter.path,
      name: routePath.dynamicRouter.name,
      component: () =>
        import(
          /* webpackChunkName: "dynamic-route" */ './views/DynamicRoute.vue'
        )
    },
    {
      // 404
      path: '*',
      component: () =>
        import(/* webpackChunkName: "not-found" */ './views/NotFound.vue')
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
