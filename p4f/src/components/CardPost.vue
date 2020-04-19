<template>
  <div>
    <b-card-group
      deck 
      v-for="(item, index) in posts" 
      :key="index" 
      class="mt-0 mb-3"
    >
      <b-card>
        <b-card-text>
          <strong class="capitalize">
            {{item.title}}<br>
          </strong>

          <p class="capitalize">{{ item.body }}</p>
        </b-card-text>
      </b-card>
    </b-card-group>    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostService from '@/services/PostService'

export default {
  name: 'card-post',

  data() {
    return {
      PostService: null,
      posts: [],
    }
  },

  computed: {
    ...mapGetters({
      postListByUserId: 'postListByUserId',
    }),
  },

  created() {
    this.PostService = new PostService()
    this.setPostInit()
  },

  methods: {
    ...mapActions({
      updatePostListByUserId: 'updatePostListByUserId',
    }),
    setPostInit(){
      this.PostService.getPostListById('1').then((response) => {
        this.updatePostListByUserId(response.data)
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        this.posts = this.postListByUserId;
      })
    },
  },

  watch: {
    postListByUserId(value) {
      this.posts = value
    }
  }
}
</script>

<style lang="scss" scoped>
.capitalize {
  text-transform: capitalize;
}
</style>