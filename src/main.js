import Vue from 'vue'
import App from './App.vue'

import VueLazyload from 'vue-lazyload'
import router from './router/inedx'
import store from './store'
import '@/mock/mockServe'
import 'swiper/css/swiper.min.css'
import { Button, MessageBox } from 'element-ui';
import loadimage from './assets/1.jpg'
import Vant, { Lazyload } from 'vant';
import 'vant/lib/index.css'
import './utils/validate'
Vue.use(Vant);
Vue.use(Lazyload);
Vue.config.productionTip = false
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.component(Button.name, Button)

Vue.use(VueLazyload, {
  loading: loadimage,
})

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
