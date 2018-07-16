

// initial state
// shape: [{ id, quantity }]
const state = {
    user: null,
    currentUser: null,
    settings: null, // TODO split this out into separate store
    loading: false,
    error: false
}

// getters
const getters = {
    user: state => state.user,
    currentUser: state => state.currentUser,
    id: state => state.currentUser.id
}

// actions
const actions = {
    login({state, commit, rootState }, user) {
        commit('settings/SET_LOADING', true, {root: true})
        rootState.api.client.apis.Users.login(user)
            .then(r => r.body)
            .then(user => {
                console.log(user)
                commit('SET_CURRENT_USER', user)
                commit('settings/SET_LOADING', false, {root: true})
            })
            .catch(err => {
                console.log(err)
                commit('SET_ERROR', err)
                commit('settings/SET_LOADING', false, {root: true})
            });
    },
    logout({state, commit}) {
        commit('SET__CURRENT_USER', null)
    },
    getUser({state, commit, rootState}, id) {
        this.$ac.apis.Users.get_user({
            id: id
          })
          .then(req => {
            commit('SET_USER', req.body)
          }).catch(err => {
            console.error(err.response.status)
            commit('SET_ERROR', err)
            // TODO set path to login or 404 
          })
    }
}

// mutations
const mutations = {
    SET_LOADING(state, flag) {
        state.loading = flag
    },
    SET_USER(state, user) {
        state.user = user
    },
    SET_CURRENT_USER(state, user) {
        state.currentUser = user
    },
    SET_ERROR(state, err) {
        state.error = err
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
