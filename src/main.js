import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import * as api from './api/index.js'
Vue.prototype.$api = api;

import jsCookies from 'js-cookie'
Vue.prototype.$jsCookie  = jsCookies

import './assets/js/flexible.min.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
