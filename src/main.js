import Vue from 'vue'
import VueRouter from 'vue-router'
import  { routes } from './router'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
