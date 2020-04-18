<template>
  <div class="carousel-wrapper">
    <div v-if="userSelect">
      <p>Nome: {{userSelect.name}}</p>
      <p>
        <strong>Endereço:</strong>
        <br>
        <strong>Rua:</strong> {{userSelect.address.street}} - {{userSelect.address.suite}}<br>
        <strong>Cidade:</strong> {{userSelect.address.city}}<br>
        <strong>Cep:</strong> {{userSelect.address.zipcode}}
      </p>
    </div>

    <div v-else>
      <p>Carregando...</p>
    </div>

    <carousel
      :starting-image="1"
      :images="images"
      :auto-slide-interval="2500"
      :show-progress-bar="true"
    ></carousel>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import { mapGetters, mapActions } from 'vuex';
import PhotoService from '@/services/PhotoService'

export default {
  name: 'slide-content',

  components: {
    Carousel
  },

  computed: {
    ...mapGetters({
      albumByUserId: 'albumByUserId',
      userSelect: 'userSelect'
    }),
  },

  data() {
    return {
      PhotoService: null,
      images: []
    }
  },

  created() {
    this.PhotoService = new PhotoService();
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