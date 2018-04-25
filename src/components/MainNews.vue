<template>
  <div class="news">
    <div class="news-container">
      <header-right />
      <main-text-right />
      <footer-right />
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      HeaderRight: () => import('@/components/HeaderRight.vue'),
      MainTextRight: () => import('@/components/main-texts-right/MainTextRight.vue'),
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
