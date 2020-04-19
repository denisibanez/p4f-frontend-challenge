export default {
  state: {
    postListByUserId: []
  },

  mutations: {
    updatePostListByUserId(state, param) {
      state.postListByUserId = param
    },
  },

  actions: {
    updatePostListByUserId(context, param) {
      context.commit('updatePostListByUserId', param)
    },
  },

  getters: {
    postListByUserId: state => {
      return state.postListByUserId
    },
  }
}