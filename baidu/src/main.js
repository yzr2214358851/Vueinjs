import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import axios from 'axios'
Vue.prototype.$http = axios
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
