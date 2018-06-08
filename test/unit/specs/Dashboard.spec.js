import Vue from 'vue'
import { Dashboard } from '@/components/home'

describe('Dashboard', () => {

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Dashboard)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.featured-title').textContent)
      .to.equal('Featured Projects')
  })
})
