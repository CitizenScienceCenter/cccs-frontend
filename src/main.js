// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCarousel from 'vue-carousel'
import Swagger from 'swagger-client'
import VueMaterial from 'vue-material'
import store from './store'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VuexRouterSync from 'vuex-router-sync'
import VueBreadcrumbs from 'vue-2-breadcrumbs'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueCarousel)
VuexRouterSync.sync(store, router)
Vue.use(VueBreadcrumbs);

// Load swagger client and SDK is created using tags and operationIds in the JSON
Swagger({url:process.env.BASE_URI,
requestInterceptor(req) {
  // req.headers['content-type'] = 'application/json'
  let u = store.getters['user/user']
  if (u !== null) {
    req.headers['X-API-KEY'] = u.api_key
  }
  return req
}}).then((client) => {
  console.log(client)
  Vue.prototype.$ac = client
  store.dispatch('api/setClient', client)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
});
