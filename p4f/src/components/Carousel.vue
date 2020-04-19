<template>
  <div>
    <div v-if="images.length">
      <div class="card-carousel" @mouseover="stopTimer" @mouseleave="restartTimer">
        <div class="progressbar" v-if="autoSlideInterval && showProgressBar">
          <div :style="{width: progressBar + '%' }"></div>
        </div>

        <div class="card-img">
          <img :src="currentImage" alt="">
          <div class="actions">
            <span @click="prevImage" class="prev">
              &#8249;
            </span>
            <span @click="nextImage" class="next">
              &#8250;
            </span>
          </div>
        </div>
        <div class="thumbnails">
          <div 
            v-for="(image, index) in  images"
            :key="index"
            :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
            @click="activateImage(index)"
          >
            <img :src="image.thumbnailUrl" :alt="image.title">
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <h3>Carregando...</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Carousel',

  data() {
    return {
      activeImage: 0,
      autoSlideTimeout: null,
      stopSlider: false,
      timeLeft: 0,
      timerInterval: null,
      countdownInterval: 10,
    }
  },

  props: [
    'startingImage',
    'images', 
    'autoSlideInterval', 
    'showProgressBar'
  ],
  
  computed: {
    ...mapGetters({
      albumByUserId: 'albumByUserId',
    }),
    currentImage() {
      this.timeLeft = this.autoSlideInterval
      return this.images[this.activeImage].url
    },
    progressBar() {
      return 100 - (this.timeLeft/this.autoSlideInterval) * 100
    }
  },

  created() {
    if(this.startingImage 
      && this.startingImage >= 0
      && this.startingImage < this.images.length) {
      this.activeImage = this.startingImage
    }

    if(this.autoSlideInterval && this.autoSlideInterval > this.countdownInterval) {
      this.startTimer(this.autoSlideInterval)
      this.timeLeft = this.autoSlideInterval
      this.startCountdown()
    }
  },
  
  methods: {
    nextImage() {
      var active = this.activeImage + 1
      if(active >= this.images.length) {
        active = 0
      }
      this.activateImage(active)
    },
    prevImage() {
      var active = this.activeImage - 1
      if(active < 0) {
        active = this.images.length - 1
      }
      this.activateImage(active)         
    },
    activateImage(imageIndex) {
      this.activeImage = imageIndex
    },
    startTimer(interval) {
      if(interval && interval > 0 && !this.stopSlider) {
        var self = this
        clearTimeout(this.autoSlideTimeout)
        this.autoSlideTimeout = setTimeout(function() {
          self.nextImage()
          self.startTimer(self.autoSlideInterval)
        }, interval)
      }
    },
    stopTimer() {
      clearTimeout(this.autoSlideTimeout)
      this.stopSlider = true
      clearInterval(this.timerInterval)
    },
    restartTimer() {
      this.stopSlider = false
      clearInterval(this.timerInterval)
      this.startCountdown()
      this.startTimer(this.timeLeft)
    },
    startCountdown() {
      if(!this.showProgressBar) return
      var self = this
      this.timerInterval = setInterval(function() {
        self.timeLeft -= self.countdownInterval
        if(self.timeLeft <= 0) {
          self.timeLeft = self.autoSlideInterval
        }
      }, this.countdownInterval)
    }
  },

  watch: {
    albumByUserId() {
      this.activeImage = 0
    }
  }
}
</script>


<style scoped>
.card-carousel {
    user-select: none;
    position: relative;
}

.progressbar {
    display: block;
    width: 100%;
    height: 5px;
    position: absolute;
    background-color: rgba(221, 221, 221, 0.25);
    z-index: 1;
}

.progressbar > div {
    background-color: rgba(255, 255, 255, 0.52);
    height: 100%;
}

.thumbnails {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
}

.thumbnail-image {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 2px;
}

.thumbnail-image > img {
    width: 100%;
    height: auto;
    transition: all 250ms;
}

.thumbnail-image:hover > img, 
.thumbnail-image.active > img {
    opacity: 0.6;
    box-shadow: 2px 2px 6px 1px rgba(0,0,0, 0.5);
}

.card-img {
    position: relative;
    margin-bottom: 15px;
}

.card-img > img {
    display: block;
    margin: 0 auto;
}

.actions {
    font-size: 1.5em;
    height: 40px;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #585858;
}

.actions > span {
    cursor: pointer;
    transition: all 250ms;
    font-size: 45px;
}

.actions > span.prev {
    margin-left: 5px;
}

.actions > span.next {
    margin-right: 5px;
}

.actions > span:hover {
    color: #eee;
}
</style>
