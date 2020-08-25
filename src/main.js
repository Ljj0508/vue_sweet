// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由
import axios from 'axios'
// 引入JQ
// import $ from 'jquery'
import ElementUI from 'element-ui' // element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css' // element-ui的css
Vue.use(ElementUI)
// 禁用生产提示
Vue.config.productionTip = false
// 使用模块
// 定义全局属性
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
