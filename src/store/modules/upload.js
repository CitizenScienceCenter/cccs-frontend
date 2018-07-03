

// initial state
// shape: [{ id, quantity }]
const state = {
    id: null
}

// getters
const getters = {
    id: state => state.id
}

// actions
const actions = {
    setClient({ commit }, id) {
        commit('SET_ID', id)
    }
}

// mutations
const mutations = {
    SET_ID(state, id) {
        state.id = id
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
