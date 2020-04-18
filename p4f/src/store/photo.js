export default {
  state: {
    userList: [],
    userSelect: null,
    albumByUserId: []
  },

  mutations: {
    updateUserList(state, param) {
      state.userList = param
    },
    updateUserSelect(state, param) {
      state.userSelect = param
    },
    updateAlbumByUserId(state, param) {
      state.albumByUserId = param
    },
  },

  actions: {
    updateUserList(context, param) {
      context.commit('updateUserList', param)
    },
    updateUserSelect(context, param) {
      context.commit('updateUserSelect', param)
    },
    updateAlbumByUserId(context, param) {
      context.commit('updateAlbumByUserId', param)
    },
  },

  getters: {
    userList: state => {
      return state.userList
    },
    userSelect: state => {
      return state.userSelect
    },
    albumByUserId: state => {
      return state.albumByUserId
    },
  }
}