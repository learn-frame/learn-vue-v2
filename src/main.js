import Vue from 'vue';
import Layouts from './Layouts.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store/store';
import './plugins/element.js';
import * as filter from './utils/filters';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(ElementUI);

Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});

new Vue({
  router,
  store,
  render: h => h(Layouts)
}).$mount('#app');
