import Vue from 'vue'
import Vuex from 'vuex'

import photo from './photo.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    photo,
  }
})