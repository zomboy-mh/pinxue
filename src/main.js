import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  '../utils/rem'
import store from './store'
import fastclick from 'fastclick'
import './assets/css/base.scss'
import { Row, Button, Select , Descriptions,DescriptionsItem, Dropdown, Tag, Option,
DatePicker, Input,Tabs,TabPane,Form,FormItem,Col,Upload,Message} from 'element-ui'
import VueLazyload from 'vue-lazyload'
import {  Toast, } from 'vant';
import 'vant/es/toast/style';
Vue.prototype.$toast = Toast
// Vue.use(ConfigProvider)

Vue.use(VueLazyload, {
  loading: require('./assets/images/loading.png')
})
// 解决移动端100-300ms延迟问题
fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Select)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Dropdown)
Vue.use(Tag)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Upload)
Vue.prototype.$message = Message
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
