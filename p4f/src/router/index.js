import Vue from 'vue'
import Router from 'vue-router'
import Photos from '@/pages/Photos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Photos',
      component: Photos
    }
  ],
})
