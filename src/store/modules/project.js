

// initial state
// shape: [{ id, quantity }]
const state = {
    projects: [],
    loading: false
}

// getters
const getters = {
    projects: state => state.projects
}

// actions
const actions = {
    getProjects({state, commit, rootState }) {

        commit('SET_LOADING', true)
        rootState.api.client.apis.Projects.get_projects()
          .then(req => {
            commit('SET_PROJECTS', req.body)
            commit('SET_LOADING', false)
          })
          .catch(err => {
            if (err.response.status === 404) {
              // TODO load 404 page
            } else {
              // TODO show errror
            }
          })
    },
    logout({commit}) {
        commit('SET_USER', null)
    }
}

// mutations
const mutations = {
    SET_LOADING(state, flag) {
        state.loading = flag
    },
    SET_PROJECTS(state, projects) {
        state.projects = projects
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
