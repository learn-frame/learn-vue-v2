import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import routePaths from '@/constants/routePaths';
import store from './store/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: routePaths.home.path,
      name: routePaths.home.name,
      component: Home,
      meta: { requireAuth: true }
    },
    {
      path: routePaths.vuex.path,
      name: routePaths.vuex.name,
      component: () =>
        import(/* webpackChunkName: "vuex" */ '@/views/Vuex.vue'),
      meta: { requireAuth: true }
    },
    {
      path: routePaths.vuex2.path,
      name: routePaths.vuex2.name,
      component: () =>
        import(/* webpackChunkName: "vuex2" */ '@/views/Vuex2.vue'),
      meta: { requireAuth: true }
    },
    {
      path: routePaths.vshowif.path,
      name: routePaths.vshowif.name,
      component: () =>
        import(/* webpackChunkName: "vshowif" */ '@/views/VShowIf.vue'),
      meta: { requireAuth: true }
    },
    {
      path: routePaths.use.path,
      name: routePaths.use.name,
      component: () => import(/* webpackChunkName: "use" */ '@/views/Use.vue'),
      meta: { requireAuth: true }
    },
    {
      path: routePaths.interview.path,
      name: routePaths.interview.name,
      component: () =>
        import(/* webpackChunkName: "interview" */ '@/views/Interview.vue'),
      meta: { requireAuth: true }
    },
    {
      path: routePaths.uiComponent.path,
      name: routePaths.uiComponent.name,
      component: () =>
        import(
          /* webpackChunkName: "ui-component" */ '@/views/UIComponent.vue'
        ),
      meta: { requireAuth: true }
    },
    {
      path: routePaths.slot.path,
      name: routePaths.slot.name,
      component: () =>
        import(/* webpackChunkName: "slot" */ '@/views/LearnSlot.vue'),
      meta: { requireAuth: true }
    },
    {
      path: routePaths.router.path,
      name: routePaths.router.name,
      component: () =>
        import(/* webpackChunkName: "router" */ '@/views/Route.vue'),
      meta: { requireAuth: true },
      children: [
        {
          path: 'child',
          name: 'child',
          component: () =>
            import(/* webpackChunkName: "child" */ '@/views/ChildPage.vue')
        }
      ]
    },
    {
      path: routePaths.dynamicRouter.path,
      name: routePaths.dynamicRouter.name,
      component: () =>
        import(
          /* webpackChunkName: "dynamic-route" */ '@/views/DynamicRoute.vue'
        ),
      meta: { requireAuth: true }
    },
    {
      path: routePaths.login.path,
      name: routePaths.login.name,
      component: () =>
        import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
      meta: { requireAuth: false }
    },
    {
      // 404
      path: '*',
      component: () =>
        import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue'),
      meta: { requireAuth: false }
    }
  ]
});

// redirect 当用户访问 /a 时，URL 将会被替换成 /b，然后匹配路由为 /b
// alias    当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some($route => $route.meta.requireAuth)) {
    if (store.state.loginStore.token) {
      document.title = to.name;
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

// 全局级守卫
// beforeEach (全局前置守卫) 用于做路由拦截
// beforeResolve (全局解析守卫) 组件内守卫和异步路由组件被解析之后
// afterEach (全局后置守卫)

// 组件级守卫
// beforeRouteEnter
// beforeRouteUpdate
// beforeRouteLeave 这个离开守卫通常用来禁止用户在还未保存修改前突然离开，也就是在离开前显示一个确认框

// React-Router-4 有一个 <BrowserRouter /> 组件，该组建有一个 getUserConfirmation 属性
// 该属性和 beforeRouteLeave 作用类似
// 不过它要在需要做确认的组件显式的添加一个 <Prompt message='' /> 组件

export default router;
