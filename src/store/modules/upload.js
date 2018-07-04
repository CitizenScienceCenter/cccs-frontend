// initial state
// shape: [{ id, quantity }]
const state = {
  id: null,
  content: []
}

// getters
const getters = {
}

// actions
const actions = {
  addID ({
    state,
    commit,
    rootState
  }, id) {
    for (let i = 0; i < state.content.length; i++) {      
        rootState.api.client.apis.Media.put_medium(state.content.id, {'source_id': id})
            .then(req => {
                console.log(req)
                if (i === state.content.length - 1) {
                    commit('CLEAR')
                }
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
  ADD_CONTENT(state, entry) {
    console.log(entry)
    state.content = [entry]
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
