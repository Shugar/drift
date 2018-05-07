<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        bio
      </div>
      <div class="article__wrapper">
        <Article :text="article[0].text" :title="article[0].title" />
        <Article :text="article[1].text" :title="article[1].title" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bio',

    components: {
      Article: () => import('@/components/bio/Article.vue'),
    },

    data() {
      return {
        article: [
          {
            title: 'Story of the road',
            text: 'Hello guys! My name is Alexander Dmitrenko. I am 25 years old and live in Moscow, Russia. I started practicing motosport professionally in 2016. <br /><br /> While trying different disciplines out in Germany, Russia, Japan Driving Academy, i decided in favour of drifting.'
          },
          {
            title: 'During 2017',
            text: 'During 2017 i took part in a few races of Russian Drift Series. In 2018 i have planes to participate in D1GP, Formula D Japan, Drift Masters, NEZ, HGK Drift Challenge and Russian Drift Series.<br /><br />We have great plans for the next season, energy and the whole world! See you on a Race track!'
          }
        ]
      }
    },

    mounted () {
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    // display: flex;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .article__wrapper {
    display: flex;
    justify-content: space-between;
    width: 1020px;
  }


  .title {
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    margin-right: 100px;
  }
</style>
