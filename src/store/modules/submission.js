

// initial state
// shape: [{ id, quantity }]
const state = {
    media: undefined,
    submission: undefined,
    loading: false
}

// getters
const getters = {
    submission: state => state.submission
}

// actions
const actions = {
    postSubmission({state, commit, rootState, dispatch }) {

        commit('SET_LOADING', true)
        console.log(Object.assign({}, state.submission.content))
        rootState.api.client.apis.Submissions.create_submission({submission: state.submission})
          .then(req => {
            commit('SET_LOADING', false)
            commit('SET_SUBMISSION', Object.assign({}, req.body))
            console.log(rootState.upload.content)
            if (rootState.upload.content.length > 0) {
              // commit('upload/SET_ID', req.body.id, {root: true})
              dispatch('upload/addID', req.body.id, {root: true})
            }
          })
          .catch(err => {
            console.log(err)
            if (err.response.status === 404) {
              // TODO load 404 page
            } else {
              // TODO show errror
            }
          })
    },
    putSubmission({state, commit, rootState}, submission) {
        commit('SET_LOADING', true)
        console.log(submission)
        rootState.api.client.apis.Submissions.put_submission({id: submission.id, submission: submission})
          .then(req => {
            commit('SET_LOADING', false)
            commit('SET_SUBMISSION', req.body)
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
