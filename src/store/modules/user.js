

// initial state
// shape: [{ id, quantity }]
const state = {
    user: null,
    settings: null,
    loading: false
}

// getters
const getters = {
    user: state => state.user,
    id: state => state.user.id
}

// actions
const actions = {
    login({state, commit, rootState }, user) {
        commit('SET_LOADING', true)
        rootState.api.client.apis.Users.login(user)
            .then(r => r.body)
            .then(user => {
                commit('SET_USER', user)
                commit('SET_LOADING', false)
            })
            .catch(err => {
                commit('SET_LOADING', false)
            });
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
    SET_USER(state, user) {
        state.user = user
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
