import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'
import user from './modules/user'
import project from './modules/project'
import task from './modules/task'
import submission from './modules/submission'
import media from './modules/media'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    project,
    api,
    task,
    media,
    submission
  },
  strict: debug,
  plugins: [createPersistedState()]
})