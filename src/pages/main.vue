<template>
  <div>
      <logo class="only-mobile"/>
      <div class="main">
        <div class="main-slider-container">
          <MainSlider :count="count" />
            <transition name="fade">
              <div class="main-slider-container-img main-slider-container-img-1" v-if="count===1" key="1" />
              <div class="main-slider-container-img main-slider-container-img-2"  v-if="count===2" key="2" />
              <div class="main-slider-container-img main-slider-container-img-3"  v-if="count===3" key="3" />
              <div class="main-slider-container-img main-slider-container-img-4"  v-if="count===4" key="4" />
            </transition>
        </div>
        <MainNews />
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',

    components: {
      HeaderComponent: () => import('@/components/Header.vue'),
      Logo: () => import('@/components/Logo.vue'),
      MainSlider: () => import('@/components/MainSlider.vue'),
      MainNews: () => import('@/components/MainNews.vue')
    },

    data() {
      return {
        count: 1
      }
    },

    mounted () {
      this.$root.$on('nextSlide', () => {
        if (this.count < 4) {
          this.count++;
        } else {
          this.count = 1;
        }
      })
    }
  }
</script>

<style scoped>
  .only-mobile {
    display: none;
  }

  .main {
    display: flex;
    flex-flow: row nowrap;
  }

  .main-slider-container {
    position: relative;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;

    min-height: 100vh;
    width: 55.2%;
  }

  .main-slider-container::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: rgba(51, 51, 51, 0.6);

    z-index: 0;
  }

  .main-slider-container-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .main-slider-container-img-1 {
    background: url('../assets/images/car2.png') no-repeat;
    background-size: cover;
    background-position: 7% 0;
  }

  .main-slider-container-img-2 {
    background: url('../assets/images/car1.png') no-repeat;
    background-size: cover;
    background-position: 7% 0;
  }

  .main-slider-container-img-3 {
    background: url('../assets/images/car3.png') no-repeat;
    background-size: cover;
    background-position: 7% 0;
  }

  .main-slider-container-img-4 {
    background: url('../assets/images/car4.png') no-repeat;
    background-size: cover;
    background-position: 7% 0;
  }

  .fade-enter-active, .fade-more-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
