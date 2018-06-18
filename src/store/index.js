import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'
import user from './modules/user'
import project from './modules/project'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    project,
    api
  },
  strict: debug,
  plugins: [createPersistedState()]
})