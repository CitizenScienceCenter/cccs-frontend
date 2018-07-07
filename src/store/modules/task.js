

// initial state
// shape: [{ id, quantity }]
const state = {
    tasks: [],
    selectedTask: null,
    loading: false,
    taskSaved: false
}

// getters
const getters = {
    // https://vuex.vuejs.org/guide/getters.html#method-style-access
    // allTasks: state => state.tasks.concat(state.clientTasks)
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
                commit('SET_TASKSAVED', true)
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
                commit('SET_LOADING', false)
            })
            .catch(err => {
                console.log(err)
                commit('SET_LOADING', false)
                if (err.status === 404) {
                    // TODO load 404 page
                } else {
                    // TODO show errror
                }
            })
    },
    addTasks({ state, commit, dispatch, rootState }, tasks) {
        commit('SET_LOADING', true)
        rootState.api.client.apis.Tasks.create_tasks({
            tasks: tasks,
        })
            .then(res => {
                commit('SET_LOADING', false)
                console.log(res.body[0].id)
                dispatch('upload/addID', res.body[0].id, {root: true})
            })
            .catch(e => console.error(e))

    },
    deleteTasks({ state, commit, dispatch, rootState }, tasks) {
        commit('SET_LOADING', true)
        rootState.api.client.apis.Tasks.delete_tasks({
            tasks: tasks,
        })
            .then(res => {
                commit('SET_TASKS', res.body)
                commit('SET_LOADING', false)
            })
            .catch(e => console.error(e));

    }

}

// mutations
const mutations = {
    SET_LOADING(state, flag) {
        state.loading = flag
    },
    SET_TASKSAVED(state, flag) {
        state.taskSaved = flag
    },
    SET_TASKS(state, tasks) {
        state.tasks = tasks
    },
    SET_TASK(state, task) {
        state.selectedTask = task
    },
    UPDATE_TASK(state, index, params) {
        Object.assign(state.getters.allTasks[index], {
            [params.field]: params.value
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
