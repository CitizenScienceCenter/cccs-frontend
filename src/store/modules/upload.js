// initial state
// shape: [{ id, quantity }]
const state = {
  id: null,
  content: []
}

// getters
const getters = {
  id: state => state.id
}

// actions
const actions = {
  saveUploads ({
    state,
    commit,
    rootState
  }) {
    for (let i = 0; i < this.content.length; i++) {
      // this.fileSaved = false
      const f = this.content.item(i)
      // this.sending = true
      let form = {
        'id': state.getters['id']
      }
      form.attachment = f
      rootState.api.client.apis.Media.upload(this.form)
        .then(req => {
          console.log(req)
        })
        .catch((e) => {
          console.error(e)
        })
    }
  }
}

// mutations
const mutations = {
  SET_ID(state, id) {
    state.id = id
  },
  SET_CONTENT(state, content) {
    state.content = content
  },
  CLEAR(state) {
    state.id = null
    state.content = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
