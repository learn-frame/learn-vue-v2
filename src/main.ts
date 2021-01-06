import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import '@/assets/styles/global.css'

Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')

export default vm
