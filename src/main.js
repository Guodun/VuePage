// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux.vue'
import first from './components/Hello.vue'
import Vuex from 'vuex'
import { LoadingPlugin } from 'vux'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(LoadingPlugin)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

console.log(store.state.count)
store.commit('increment')
console.log(store.state.count)

// 设置路由
const routes = [{
  path: '/home',
  component: Home
}, {
  path: '/first',
  component: first
}]
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
