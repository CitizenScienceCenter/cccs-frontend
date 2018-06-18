

// initial state
// shape: [{ id, quantity }]
const state = {
    client: null
}

// getters
const getters = {
    client: state => state.client
}

// actions
const actions = {
    setClient({ commit }, client) {
        commit('SET_API', client)
    }
}

// mutations
const mutations = {
    SET_API(state, client) {
        state.client = client
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
