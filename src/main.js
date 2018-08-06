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
import './assets/styles/theme.scss'
import VuexRouterSync from 'vuex-router-sync'
import * as loc from './localisation/index'
import vuexI18n from 'vuex-i18n'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(Viewer)
// TODO custiom themes
Vue.use(VueCarousel)
Vue.use(vuexI18n.plugin, store)
Vue.i18n.add('en', loc.en);
Vue.i18n.add('de', loc.de);
VuexRouterSync.sync(store, router)


// Load swagger client and SDK is created using tags and operationIds in the JSON
Swagger({url:process.env.BASE_URI,
requestInterceptor(req) {
  // req.headers['content-type'] = 'application/json'
  let u = store.getters['user/currentUser']
  if (u !== null) {
    req.headers['X-API-KEY'] = u.api_key
  }
  return req
}}).then((client) => {
  Vue.prototype.$ac = client
  Vue.i18n.set('en')
  let t = store.getters['settings/theme']
  // Vue.$material.theming.theme = t;
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
