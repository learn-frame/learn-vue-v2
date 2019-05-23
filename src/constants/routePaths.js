const routePaths = {
  home: {
    path: '/',
    name: 'home',
    showName: 'Home'
  },
  vuex: {
    path: '/vuex',
    name: 'vuex',
    showName: 'Vuex'
  },
  vuex2: {
    path: '/vuex2',
    name: 'vuex2',
    showName: 'Vuex2'
  },
  uiComponent: {
    path: '/ui-component',
    name: 'ui-component',
    showName: 'UI 轮子'
  },
  slot: {
    path: '/slot',
    name: 'slot',
    showName: '插槽机制'
  },
  use: {
    path: '/use',
    name: 'use',
    showName: '深入理解 Vue.use()'
  },
  vshowif: {
    path: '/vshowif',
    name: 'vshowif',
    showName: '深入理解 v-show'
  },
  interview: {
    path: '/interview',
    name: 'interview',
    showName: '面试题'
  },
  router: {
    path: '/router',
    name: 'router',
    showName: '学习路由',
    children: [
      {
        path: '/child',
        name: 'child',
        showName: '嵌套路由-子路有'
      }
    ],
    meta: { requiresAuth: true }
  },
  dynamicRouter: {
    path: '/dynamic-router/:id',
    name: 'dynamic-router',
    showName: '动态路由页'
  },
  login: {
    path: '/login',
    name: 'login',
    showName: '登录'
  },
  aNonexistentRoute: {
    path: '/a-nonexistent-route',
    name: 'a-nonexistent-route',
    showName: '一个不存在的路由'
  }
};

export default routePaths;
