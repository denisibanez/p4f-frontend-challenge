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
        <b-card no-body>
          <b-tabs pills card>
            <address-info>
            </address-info>
            <b-tab title="Fotos" active>
              <slide-content>
              </slide-content>  
            </b-tab>
            <b-tab title="Posts">
              <card-post>
              </card-post>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CardProfile from '@/components/CardProfile'
import CardPost from '@/components/CardPost'
import AddressInfo from '@/components/AddressInfo'
import SlideContent from '@/components/SlideContent'
import { mapActions } from 'vuex'
import PhotoService from '@/services/PhotoService'

export default {
  name: 'home',

  components: {
    CardProfile,
    AddressInfo,
    SlideContent,
    CardPost,
  },

  data() {
    return {
      PhotoService: null,
    }
  },

  created() {
    this.PhotoService = new PhotoService()
    this.getUserList()
  },

  methods: {
    ...mapActions({
      updateUserList: 'updateUserList',
      updateUserSelect: 'updateUserSelect',
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