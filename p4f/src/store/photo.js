export default {
  state: {
    albumByUserId: []
  },

  mutations: {
    updateAlbumByUserId(state, param) {
      state.albumByUserId = param
    },
  },

  actions: {
    updateAlbumByUserId(context, param) {
      context.commit('updateAlbumByUserId', param)
    },
  },

  getters: {
    albumByUserId: state => {
      return state.albumByUserId
    },
  }
}