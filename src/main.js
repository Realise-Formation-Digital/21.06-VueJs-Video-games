import Vue from 'vue'
import App from './App.vue'
import './plugin/bootstrapVue.js'

import router from "./plugin/router";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
