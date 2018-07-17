const state = {
    showNavigation: false,
    showSidepanel: false,
    loading: false,
    err: null,
    errTimeout: 5000,
    theme: 'light'
}

const getters = {
}

const actions = {
    setError({state, commit, rootState }, err) {
        commit('SET_ERROR', err)
        setTimeout(() => {
            commit('SET_ERROR', null)
        }, state.errTimeout)
    },

}

const mutations = {
    SET_LOADING(state, flag) {
        state.loading = flag
    },
    SET_NAV(state, flag) {
        state.showNavigation = flag
    },
    SET_SIDEPANEL(state, flag) {
        state.showSidepanel = flag
    },
    SET_ERROR(state, err) {
        state.error = err
    },
    SET_THEME(state, theme) {
        state.theme = theme
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}