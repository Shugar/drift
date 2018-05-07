<template>
  <div class="article">
    <div class="title"> {{ title }} </div>
    <div class="text" v-html="text"></div>
  </div>
</template>

<script>
  export default {
    props: ['text', 'title'],
    components: {
      // HeaderComponent: () => import('@/components/Header.vue'),
    },

    data() {
      return {
      }
    },

    mounted () {
    }
  }
</script>

<style lang="scss" scoped>

  .article {
    width: 50%;
    max-width: 440px;
    color: #fff;
  }

  .title {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 64px;
    margin-bottom: 40px;
  }

  .text {
    font-size: 18px;
    line-height: 25px;
    opacity: 0.8;

  }
</style>
