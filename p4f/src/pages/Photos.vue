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
      <b-col sm="3">
        <card-profile></card-profile>
      </b-col>

      <b-col sm="9">
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

export default {
  name: 'photos',

  components: {
    CardProfile,
    Navigator,
    SlideContent
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