// initial state
// shape: [{ id, quantity }]
const state = {
  projects: [],
  selectedProject: null,
  selectedStats: null
}

// getters
const getters = {
  projects: state => state.projects
}

// actions
const actions = {
  getProjects({
    state,
    commit,
    rootState
  }, search) {

    commit('settings/SET_LOADING', true, {
      root: true
    })
    rootState.api.client.apis.Projects.get_projects({
        search_term: search || undefined
      })
      .then(req => {
        commit('SET_PROJECTS', req.body)
        commit('settings/SET_LOADING', false, {
          root: true
        })
      })
      .catch(err => {
        commit('settings/SET_LOADING', false, {
          root: true
        })
        commit('settings/SET_ERROR', err, {
          root: true
        })
      })
  },
  getProject({
    state,
    commit,
    rootState
  }, id) {
    commit('settings/SET_LOADING', true, {
      root: true
    })
    rootState.api.client.apis.Projects.get_project({
        id: id
      })
      .then(req => {
        commit('SET_PROJECT', req.body)
        commit('settings/SET_LOADING', false, {
          root: true
        })
      })
      .catch(err => {
        commit('settings/SET_LOADING', false, {
          root: true
        })
        commit('settings/SET_ERROR', err, {
          root: true
        })
      })
  },
  createProject({
    state,
    commit,
    rootState
  }, project) {
    commit('settings/SET_LOADING', true, {
      root: true
    })
    rootState.api.client.apis.Projects.create_project({
        project: project
      })
      .then(req => {
        console.log(req)
        commit('settings/SET_LOADING', false, {
          root: true
        })
        commit('SET_PROJECT', req.body)
      })
      .catch(err => {
        commit('settings/SET_ERROR', err, {
          root: true
        })
        commit('settings/SET_LOADING', false, {
          root: true
        })
      });
  },
  deleteProject({
    state,
    commit,
    rootState
  }, pid) {
    commit('settings/SET_LOADING', true, {
      root: true
    })
    rootState.api.client.apis.Projects.delete_project({
        id: pid
      })
      .then(req => {
        commit('SET_PROJECT', null)
        commit('settings/SET_LOADING', false, {
          root: true
        })
      })
      .catch(err => {
        commit('settings/SET_LOADING', false, {
          root: true
        })
        commit('settings/SET_ERROR', err, {
          root: true
        })
      });
  }
}

// mutations
const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
  SET_PROJECT(state, project) {
    state.selectedProject = project
  },
  SET_STATS(state, stats) {
    state.selectedStats = stats
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
