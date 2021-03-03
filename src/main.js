import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://your_url'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

// 加载 mock 逻辑
require('./mock.js')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
