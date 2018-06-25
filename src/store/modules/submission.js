

// initial state
// shape: [{ id, quantity }]
const state = {
    media: undefined,
    submission: undefined,
    loading: false
}

// getters
const getters = {
    sumbission: state => state.submission
}

// actions
const actions = {
    postSubmission({state, commit, rootState }, submission) {

        commit('SET_LOADING', true)
        rootState.api.client.apis.Submissions.create_submission(submission)
          .then(req => {
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
    SET_MEDIA(state, media) {
        state.media = media
    },
    SET_SUBMISSION(state, sub) {
        state.submission = sub
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
