import Vue from 'vue'
import App from './App.vue'

import router from './router'

import 'normalize.css/normalize.css'

import vuetify from '@/plugins/vuetify';

import '@/plugins/hljs';

import '@/assets/scss/style.scss' // wk global css

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
