import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// ui庫
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 國際化
import VueI18n from 'vue-i18n'
// 全局默认样式
import global from './assets/css/global.css'
// rem基准值
import 'lib-flexible/flexible'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueI18n)

/*----語言包----*/
const i18n = new VueI18n({
  locale: 'zh-CN',  // 語言標識
  messages: {
    'zh-CN': require('./assets/common/cn'),
    'zh-EN': require('./assets/common/en'),
    'zh-JN': require('./assets/common/jn')
  },
})

new Vue({
  i18n,  // 國際化
  router,
  store,
  render: h => h(App)
}).$mount('#app')
