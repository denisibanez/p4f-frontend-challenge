<template>
  <div class="wrap-user">
    <b-card-group
      deck 
      v-for="(item, index) in userList" 
      :key="index" 
      class="mt-0 mb-3"
    >
      <b-card
        :header="item.company.name"
        @click="setUserSelected(item)"
      >
        <b-media tag="li">
          <template v-slot:aside>
            <b-avatar 
              variant="primary"
              src="https://placekitten.com/300/300">
            </b-avatar>
          </template>
          <h5 class="mt-0 mb-1 text-control">{{item.username}}</h5>
          <p class="mb-0 text-control">{{item.name}}</p>
          <p class="mb-0 text-control">{{item.email}}</p>
        </b-media>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PhotoService from '@/services/PhotoService'

export default {
  name: 'card-profile',

  data() {
    return {
      PhotoService: null
    }
  },

  computed: {
    ...mapGetters({
      userList: 'userList',
    }),
  },

  created() {
    this.PhotoService = new PhotoService();
  },

  methods: {
    ...mapActions({
      updateUserSelect: 'updateUserSelect',
      updateAlbumByUserId: 'updateAlbumByUserId',
    }),
    setUserSelected($event) {
      this.updateUserSelect($event)
      this.PhotoService.getAlbumById($event.id).then((response) => {
        this.updateAlbumByUserId(response.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    
  }
}
</script>

<style lang="scss" scoped>
.wrap-user {
  cursor:pointer;
  .text-control {
    word-break: break-word;
    font-size: 14px;
  }
}
</style>