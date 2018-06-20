

// initial state
// shape: [{ id, quantity }]
const state = {
    tasks: [],
    selectedTask: null,
    loading: false,
    clientTasks: []
}

// getters
const getters = {
    allTasks: state => state.tasks.concat(state.clientTasks)
}

// actions
const actions = {
    getTasks({ state, commit, rootState }, search) {
        commit('SET_LOADING', true)
        rootState.api.client.apis.Tasks.get_tasks({
            search_term: search || undefined
        })
            .then(res => {
                commit('SET_TASKS', res.body)
                commit('SET_LOADING', false)
            })
            .catch(err => {
                console.log(err)
                commit('SET_LOADING', false)
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
            .then(res => {
                res.body['content_str'] = JSON.stringify(res.body.content)
                commit('SET_TASK', res.body)
                commit('SET_LOADING', false)
            })
            .catch(err => {
                commit('SET_LOADING', false)
                if (err.response.status === 404) {
                    // TODO load 404 page
                } else {
                    // TODO show errror
                }
            })
    },
    projectTasks({ state, commit, rootState }, id) {
        commit('SET_LOADING', true)
        rootState.api.client.apis.Projects.project_tasks({
            id: id
        })
            .then(res => {
                res.body.forEach(t => {
                    t['content_str'] = JSON.stringify(t.content)
                })
                commit('SET_TASKS', res.body)
                commit('SET_CLIENT_TASKS', [])
                commit('SET_LOADING', false)
            })
            .catch(err => {
                console.log(err)
                commit('SET_LOADING', false)
                if (err.response.status === 404) {
                    // TODO load 404 page
                } else {
                    // TODO show errror
                }
            })
    },
    addTasks({ state, commit, dispatch, rootState }, pid, tasks) {
        commit('SET_LOADING', true)
        if (tasks === undefined) {
            tasks = state.clientTasks
        }
        rootState.api.client.apis.Tasks.create_tasks({
            tasks: tasks,
        })
            .then(res => {
                commit('SET_LOADING', false)
                commit('SET_CLIENT_TASKS', [])
                // dispatch('getTasks', pid)
            })
            .catch(e => console.error(e));

    },
    deleteTasks({ state, commit, dispatch, rootState }, pid, tasks) {
        commit('SET_LOADING', true)
        rootState.api.client.apis.Tasks.delete_tasks({
            tasks: tasks,
        })
            .then(res => {
                commit('SET_TASKS', res.body)
                commit('SET_LOADING', false)
                dispatch('getTasks', pid)
            })
            .catch(e => console.error(e));

    },
    syncTasks({ state, commit, dispatch, rootState }, pid) {
        console.log(state.clientTasks)
        dispatch('addTasks', pid)
            // .then(commit('SET_CLIENT_TASKS'), [])
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
    },
    SET_CLIENT_TASKS(state, ct) {
        state.clientTasks = ct
    },
    APPEND_CLIENT_TASK(state, ct) {
        state.clientTasks.push(ct)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
