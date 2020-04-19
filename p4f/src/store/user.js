export default {
  state: {
    userList: [],
    userSelect: null,
  },

  mutations: {
    updateUserList(state, param) {
      state.userList = param
    },
    updateUserSelect(state, param) {
      state.userSelect = param
    },
  },

  actions: {
    updateUserList(context, param) {
      context.commit('updateUserList', param)
    },
    updateUserSelect(context, param) {
      context.commit('updateUserSelect', param)
    },
  },

  getters: {
    userList: state => {
      return state.userList
    },
    userSelect: state => {
      return state.userSelect
    },
  }
}