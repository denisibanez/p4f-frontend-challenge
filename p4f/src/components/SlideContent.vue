<template>
  <div class="carousel-wrapper">
    <p>Nome</p>
    <p>
      Endereço: Rua sandra Regina - 150<br>
      Vila Crett - Carapícuiba - SP<br>
      cep: 06386-400
    </p>

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

export default {
  name: 'slide-content',

  components: {
    Carousel
  },

  data() {
    return {
       images: [
        {
            id: '1',
            big: 'https://images.madeiramadeira.com.br/product/images/99157190-adesivo-parede-paisagem-estrada-viagem-natureza-gg567prdfs89loibybfcc-179-1-800x729.jpg',
            thumb: 'https://images.madeiramadeira.com.br/product/images/99157190-adesivo-parede-paisagem-estrada-viagem-natureza-gg567prdfs89loibybfcc-179-1-800x729.jpg'
        },
        {
            id: '2',
             big: 'https://images.madeiramadeira.com.br/product/images/99157190-adesivo-parede-paisagem-estrada-viagem-natureza-gg567prdfs89loibybfcc-179-1-800x729.jpg',
            thumb: 'https://i.pinimg.com/originals/61/a8/5b/61a85bc5fe12ca980d085d203e83bc3a.jpg'
        },
        {
            id: '3',
            big: 'https://images.madeiramadeira.com.br/product/images/99157190-adesivo-parede-paisagem-estrada-viagem-natureza-gg567prdfs89loibybfcc-179-1-800x729.jpg',
            thumb: 'https://i.pinimg.com/originals/61/a8/5b/61a85bc5fe12ca980d085d203e83bc3a.jpg'
        },
        {
            id: '4',
            big: 'https://images.madeiramadeira.com.br/product/images/99157190-adesivo-parede-paisagem-estrada-viagem-natureza-gg567prdfs89loibybfcc-179-1-800x729.jpg',
            thumb: 'https://i.pinimg.com/originals/61/a8/5b/61a85bc5fe12ca980d085d203e83bc3a.jpg'
        }
      ]
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