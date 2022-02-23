import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import './assets/css/base.scss'
import { Button, Select } from 'element-ui'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: require('./assets/images/loading.png')
})
// 解决移动端100-300ms延迟问题
fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
