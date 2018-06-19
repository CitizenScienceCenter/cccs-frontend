

// initial state
// shape: [{ id, quantity }]
const state = {
    media: [],
    loading: false
}

// getters
const getters = {
    media: state => state.media
}

// actions
const actions = {
    getMedia({state, commit, rootState }, search) {

        commit('SET_LOADING', true)
        rootState.api.client.apis.Media.get_media({
            search_term: search || undefined
        })
          .then(req => {
            commit('SET_MEDIA', req.body)
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
    deleteMedium({state, commit, rootState}, id) {
        commit('SET_LOADING', true)
        rootState.api.client.apis.Media.delete_medium({
            id: id || undefined
        })
          .then(req => {
            commit('SET_LOADING', false)
            dispatch('getMedia')
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
    SET_MEDIA(state, media) {
        state.media = media
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
