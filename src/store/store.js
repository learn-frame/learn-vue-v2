import Vue from 'vue';
import Vuex from 'vuex';
import countStore from './countStore';
import asyncStore from './asyncStore';
import todoStore from './todoStore';
import loginStore from './loginStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countStore,
    asyncStore,
    todoStore,
    loginStore
  },
});
