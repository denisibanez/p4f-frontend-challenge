import Vue from 'vue'
import Vuex from 'vuex'

import photo from './photo.js'
import user from './user.js'
import post from './post.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    photo,
    user,
    post,
  }
})