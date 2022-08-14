import Vue from 'vue'
import App from './App.vue'

import router from './router/inedx'
import store from './store'
import '@/mock/mockServe'
import 'swiper/css/swiper.min.css'
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
