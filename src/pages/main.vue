<template>
  <div>
      <logo class="only-mobile"/>
      <div class="main">
        <div class="main-slider-container">
          <MainSlider />
        </div>
        <news />
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
      news: () => import('@/components/news.vue')
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


    background: url('../assets/images/car2.png') no-repeat;
    background-size: cover;
    background-position: 7% 0;
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
</style>
