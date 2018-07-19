const state = {
    showNavigation: false,
    showSidepanel: false,
    loading: false,
    err: null,
    errTimeout: 5000,
    theme: 'light',
    locale: 'en'
}

const getters = {
    loc: state => state.locale
}

const actions = {
    setError({state, commit, rootState }, err) {
        commit('SET_ERROR', err)
        setTimeout(() => {
            commit('SET_ERROR', null)
        }, state.errTimeout)
    },
    setLoc({state, commit, rootState}, i18n, loc) {
        // i18n.locale = loc
        commit('SET_LOCALE', loc)
    }

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
    },
    SET_LOCALE(state, loc) {
        state.loc = loc
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}