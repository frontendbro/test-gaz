import Vue from 'vue'
import Antd from 'ant-design-vue'
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import utc from 'dayjs/plugin/utc'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Antd)
dayjs.locale(ru)
dayjs.extend(utc)

Vue.prototype.$date = dayjs

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
