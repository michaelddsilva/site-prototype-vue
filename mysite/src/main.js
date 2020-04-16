import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import JQuery from 'jquery'

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(JQuery)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
