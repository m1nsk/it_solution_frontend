import { getMessages, setMessageStatus } from 'api/index'

// initial state
const state = {
  messages: []
}

// getters
const getters = {
  messagesOutOfSpace: state => state.messages
}

// actions
const actions = {
  getMessages ({ commit }) {
    let promise = getMessages()
    promise.then((response) => {
      commit('setMessages', response.data)
    })
  },
  setMessageStatus (commit, id) {
    console.log(id)
    let promise = setMessageStatus({'id': id})
    promise.then(response => {
      this.dispatch('getMessages')
    })
  }
}

// mutations
const mutations = {
  setMessages (state, messages) {
    state.messages = messages
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
