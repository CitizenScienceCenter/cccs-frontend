import Vue from 'vue'
import { Dashboard } from '@/views/home'
import store from '@/store'
import * as loc from '@/localisation/index'
import vuexI18n from 'vuex-i18n'

Vue.use(vuexI18n.plugin, store)
Vue.i18n.add('en', loc.en)
Vue.i18n.set('en')

describe('Dashboard', () => {

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Dashboard)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.featured-title').textContent)
      .to.equal('Featured Projects')
  })
})
