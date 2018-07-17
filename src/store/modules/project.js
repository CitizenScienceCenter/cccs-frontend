

// initial state
// shape: [{ id, quantity }]
const state = {
    projects: [],
    selectedProject: null
}

// getters
const getters = {
    projects: state => state.projects
}

// actions
const actions = {
    getProjects({state, commit, rootState }, search) {

        commit('settings/SET_LOADING', true, {root: true})
        rootState.api.client.apis.Projects.get_projects({
            search_term: search || undefined
        })
          .then(req => {
            commit('SET_PROJECTS', req.body)
            commit('settings/SET_LOADING', false, {root: true})
          })
          .catch(err => {
            commit('settings/SET_LOADING', false, {root: true})
            // if (err.response.status === 404) {
              // TODO load 404 page
            // } else {
            //   // TODO show errror
            // }
          })
    },
    getProject({ state, commit, rootState }, id) {
        commit('settings/SET_LOADING', true, {root: true})
        rootState.api.client.apis.Projects.get_project({
            id: id
        })
            .then(req => {
                commit('SET_PROJECT', req.body)
                commit('settings/SET_LOADING', false, {root: true})
            })
            .catch(err => {
                commit('settings/SET_LOADING', false, {root: true})
                // if (err.response.status === 404) {
                //     // TODO load 404 page
                // } else {
                //     // TODO show errror
                // }
            })
    }
}

// mutations
const mutations = {
    SET_PROJECTS(state, projects) {
        state.projects = projects
    },
    SET_PROJECT(state, project) {
        state.selectedProject = project
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
