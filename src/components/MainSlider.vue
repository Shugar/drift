<template>
    <div class="main-slider">
      <header-left />
      <header-mobile />
      <div class="main-slider__container">
        <main-text-left :count="count" />
      </div>
      <footer-left />
      <footer-mobile />
    </div>
</template>

<script>
  export default {
    components: {
      HeaderLeft: () => import('@/components/HeaderLeft.vue'),
      HeaderMobile: () => import('@/components/HeaderMobile.vue'),
      MainTextLeft: () => import('@/components/main-texts-left/MainTextLeft.vue'),
      FooterLeft: () => import('@/components/FooterLeft.vue'),
      FooterMobile: () => import('@/components/FooterMobile.vue'),
    },

    props: ['count']
  }
</script>
<style scoped>
  .main-slider {
    max-width: 780px;
    width: 100%;

    padding-left: 12.82%;
    padding-bottom: 80px;
    padding-right: 12.82%;

    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }

  .main-slider__container {
    position: relative;
    display: flex;
    flex-flow: row nowrap;

    max-width: 679px;
    width: 100%;
    margin-top: 30px;

    z-index: 1;
  }

  @media (max-width: 1024px) {
    .main-slider {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;

      padding-left: 10%;
      padding-right: 10%;
      padding-bottom: 60px;
      max-width: initial;
      height: 100vh;
    }

    .main-slider__container {
      max-width: initial;
    }
  }

  @media (max-width: 420px) {
    .main-slider {
      padding-bottom: 50px;
      height: initial;
    }

    .main-slider__container {
      margin-top: 169px;
    }
  }
</style>
