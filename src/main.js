import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/reset.css'

Vue.config.productionTip = false

; (function () {
  var rem = document.createElement('script')
  rem.src = './rem.js'
  document.body.appendChild(rem)
})()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
