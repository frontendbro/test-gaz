import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

App.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
