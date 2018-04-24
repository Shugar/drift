<template>
  <div class="news">
    <div class="news-container">
      <header-right />
      <main-text1 />
      <footer-right />
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      HeaderRight: () => import('@/components/HeaderRight.vue'),
      MainText1: () => import('@/components/main-texts-right/MainText1.vue'),
      FooterRight: () => import('@/components/FooterRight.vue')
    }
  }
</script>

<style scoped>
  .news {
    width: 45.8%;
    background: #683FFF;
  }

  .news-container {
    max-width: 660px;
    width: 100%;
    padding-left: 15.1%;
    padding-bottom: 83px;
  }
</style>
