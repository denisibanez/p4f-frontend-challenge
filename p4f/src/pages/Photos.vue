<template>
  <b-container>
    <b-row align="center">
      <b-col sm="12">
        <div class="wrapper-header">
          <b-img 
            :src="require('@/assets/img/logo.png')" 
            width="100px"
            alt="logo">
          </b-img>
          <p>Front End Challenge</p>
        </div>
      </b-col>
    </b-row>

    <b-row align="left">
      <b-col sm="12" lg="3">
        <card-profile></card-profile>
      </b-col>

      <b-col sm="12" lg="9">
        <navigator>
        </navigator>

        <slide-content>
        </slide-content>  
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CardProfile from '@/components/CardProfile'
import Navigator from '@/components/Navigator'
import SlideContent from '@/components/SlideContent'
import { mapActions } from 'vuex';
import PhotoService from '@/services/PhotoService'

export default {
  name: 'photos',

  components: {
    CardProfile,
    Navigator,
    SlideContent
  },

  data() {
    return {
      PhotoService: null
    }
  },

  created() {
    this.PhotoService = new PhotoService();
    this.getUserList()
  },

  methods: {
    ...mapActions({
      updateUserList: 'updateUserList',
      updateUserSelect: 'updateUserSelect'
    }),
    getUserList() {
      this.PhotoService.getUserList().then((response) => {
        this.updateUserList(response.data)
        this.updateUserSelect(response.data[0])
      }).catch((error) => {
        console.log(error)
      })
    },
  }
}
</script>

<style  lang="scss" scoped>
.wrapper-header {
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
  padding: 15px;
}
</style>