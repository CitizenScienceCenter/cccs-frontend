

// initial state
// shape: [{ id, quantity }]
const state = {
    tasks: [],
    selectedTask: null,
    loading: false
}

// getters
const getters = {
    tasks: state => state.tasks
}

// actions
const actions = {
    getTasks({ state, commit, rootState }, search) {
        commit('SET_LOADING', true)
        rootState.api.client.apis.Tasks.get_task({
            search_term: search || undefined
        })
            .then(req => {
                commit('SET_TASKS', req.body)
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
    getTask({ state, commit, rootState }, id) {
        commit('SET_LOADING', true)
        rootState.api.client.apis.Tasks.get_task({
            id: id
        })
            .then(req => {
                req.body['content_str'] = JSON.stringify(req.body.content)
                commit('SET_TASK', req.body)
                commit('SET_LOADING', false)
            })
            .catch(err => {
                if (err.response.status === 404) {
                    // TODO load 404 page
                } else {
                    // TODO show errror
                }
            })
    }
}

// mutations
const mutations = {
    SET_LOADING(state, flag) {
        state.loading = flag
    },
    SET_TASKS(state, tasks) {
        state.tasks = tasks
    },
    SET_TASK(state, task) {
        state.selectedTask = task
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
