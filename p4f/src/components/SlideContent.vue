<template>
  <div class="carousel-wrapper">
    <carousel
      :starting-image="0"
      :images="images"
      :auto-slide-interval="2500"
      :show-progress-bar="true"
    ></carousel>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import { mapGetters, mapActions } from 'vuex'
import PhotoService from '@/services/PhotoService'

export default {
  name: 'slide-content',

  components: {
    Carousel,
  },

  computed: {
    ...mapGetters({
      albumByUserId: 'albumByUserId',
    }),
  },

  data() {
    return {
      PhotoService: null,
      images: [],
    }
  },

  created() {
    this.PhotoService = new PhotoService()
    this.setAlbumInit()
  },

  methods: {
    ...mapActions({
      updateAlbumByUserId: 'updateAlbumByUserId',
    }),
    setAlbumInit(){
      this.PhotoService.getAlbumById('1').then((response) => {
        this.updateAlbumByUserId(response.data)
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        this.images = this.albumByUserId;
      })
    },
  },

  watch: {
    albumByUserId(value) {
      this.images = value
    }
  }
}
</script>

<style lang="scss">
.carousel-wrapper {
  margin: 25px 0;

  .card-img {
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      height: auto;
      max-height: 400px;
    }
  }

  .thumbnail-image {
    img {
      max-height: 130px;
      max-width: 130px;
    }
  }

  .progressbar {
    background-color: #41B883 !important;
  }
}

</style>