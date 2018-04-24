<template>
  <div class="main-slider">
    <header-left />
    <div class="main-slider__container">
      <main-text1 />
    </div>
    <footer-left />
  </div>
</template>

<script>
  export default {
  components: {
    HeaderLeft: () => import('@/components/HeaderLeft.vue'),
    MainText1: () => import('@/components/main-texts-left/MainText1.vue'),
    FooterLeft: () => import('@/components/FooterLeft.vue'),
  },

  }
</script>
<style scoped>
  .main-slider {
    max-width: 780px;
    width: 100%;

    padding-left: 12.82%;
    padding-bottom: 80px;
    padding-right: 12.82%;
  }

  .main-slider__container {
    position: relative;
    display: flex;
    flex-flow: row nowrap;

    max-width: 679px;
    width: 100%;
    margin-top: 143px;

    z-index: 1;
  }
</style>
