<template>
  <div class="main-text">
    <transition name="fade" mode="out-in">
      <div class="main-text__big" key="1" v-if="count === 1">
        <div class="main-text__big-item">
          <img src="@/assets/images/drift.svg" class="main-text__big-item-img main-text__big-item-drift">
        </div>
        <div class="main-text__big-item">
          <img src="@/assets/images/is-my.svg" class="main-text__big-item-img main-text__big-item-my">
        </div>
        <div class="main-text__big-item">
          <img src="@/assets/images/therapy.svg" class="main-text__big-item-img main-text__big-item-therapy">
        </div>
      </div>

      <div class="main-text__big" key="2" v-if="count === 2">
        <div class="main-text__big-item">
          <img src="@/assets/images/latest.svg" class="main-text__big-item-img main-text__big-item-latest">
        </div>
        <div class="main-text__big-item">
          <img src="@/assets/images/photos.svg" class="main-text__big-item-img main-text__big-item-photos">
        </div>
      </div>

      <div class="main-text__big" key="3" v-if="count === 3">
        <div class="main-text__big-item">
          <img src="@/assets/images/new.svg" class="main-text__big-item-img main-text__big-item-new">
        </div>
        <div class="main-text__big-item">
          <img src="@/assets/images/videos.svg" class="main-text__big-item-img main-text__big-item-videos">
        </div>
      </div>

      <div class="main-text__big" key="4" v-if="count === 4">
        <div class="main-text__big-item">
          <img src="@/assets/images/upcoming.svg" class="main-text__big-item-img main-text__big-item-upcoming">
        </div>
        <div class="main-text__big-item">
          <img src="@/assets/images/events.svg" class="main-text__big-item-img main-text__big-item-events">
        </div>
      </div>
    </transition>

    <div class="desc-wrapper">
      <div class="toggle">
        <div class="toggle__min-text">
          <div ref="next" @click="nextSlide" class="toggle__min-text-text">
            next up
          </div>
          <div class="toggle__min-text-background"></div>
        </div>
        <div class="toggle__big-text">
          Photos
        </div>
      </div>
      <transition>
        <div class="main-text__desc" name="qwer" mode="out-in" key="1" v-if="count === 1">
          <div class="main-text__desc-item">
            Alexander Dmitrenko, pilot
          </div>
          <div class="main-text__desc-item">
            of the Russian Drift Series
          </div>
        </div>
        <div class="main-text__desc" key="2" v-if="count === 2">
          <div class="main-text__desc-item">
            asdqwe qweqwda
          </div>
          <div class="main-text__desc-item">
            of the Russian Drift Series
          </div>
        </div>
        <div class="main-text__desc" key="3" v-if="count === 3">
          <div class="main-text__desc-item">
            rqweas asdasqw
          </div>
          <div class="main-text__desc-item">
            of the Russian Drift Series
          </div>
        </div>
        <div class="main-text__desc" key="4" v-if="count === 4">
          <div class="main-text__desc-item">
            asdq qweqw
          </div>
          <div class="main-text__desc-item">
            of the Russian Drift Series
          </div>
        </div>
      </transition>
    </div>
    <a href="#" class="main-text__more">
      Learn more
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 1
      }
    },

    mounted() {

    },

    methods: {
      nextSlide() {
        let animationElements = Array.from(document.querySelectorAll('.main-text__big-item-img'));

        animationElements.forEach((element) => {
          element.classList.add('text-top');
        })

        if (this.count < 4) {
          this.count++
        } else {
          this.count=1;
        }
      },

      beforeEnter() {
        console.log(23);
      }
    }
  }
</script>

<style scoped>
  .main-text {
    width: 100%;
  }

  .main-text__big {
    margin-left: 37.3%;
    margin-bottom: 40px;

  }

  .desc-wrapper {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
  }

  .main-text__desc {
    max-width: 255px;
    width: 100%;
    margin-left: 37.3%;
    margin-bottom: 38px;

    font-size: 24px;
    color: #fff;
    text-transform: uppercase;
  }

  .toggle {
    position: absolute;
    top: 0;
    left: 0;
  }

  .toggle__big-text {
    font-size: 36px;
    color: #fff;
    text-transform: uppercase;
  }

  .toggle__min-text {
    position: relative;
    display: inline-block;

    font-size: 20px;
    line-height: 20px;

    color: #fff;
    text-transform: uppercase;
  }

  .toggle__min-text-text {
    position: relative;
    z-index: 2;

    cursor: pointer;
  }

  .toggle__min-text-background {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #683FFF;
  }

  .main-text__desc-item:first-child {
    margin-bottom: 6px;
  }

  .main-text__big {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;

    min-height: 330px;
  }

  .main-text__big-item {
    display: block;
    min-height: 80px;
    margin-bottom: 40px
  }

  .main-text__big-item:last-child {
    margin-bottom: 0;
  }

  .main-text__big-item-drift {
    max-width: 200px;
    width: 100%;
  }

  .main-text__big-item-my {
    max-width: 190px;
    width: 100%;
  }

  .main-text__big-item-therapy {
    max-width: 294px;
    width: 100%;
  }

  .main-text__big-item-latest {
    max-width: 233px;
    width: 100%;
  }

  .main-text__big-item-photos {
    max-width: 240px;
    width: 100%;
  }

  .main-text__big-item-new {
    max-width: 128px;
    width: 100%;
  }

  .main-text__big-item-videos {
    max-width: 240px;
    width: 100%;
  }

  .main-text__big-item-upcoming {
    max-width: 328px;
    width: 100%;
  }

  .main-text__big-item-events {
    max-width: 238px;
    width: 100%;
  }

  .main-text__more {
    display: inline-block;
    padding: 0 2px;
    margin-left: 37.3%;

    font-size: 20px;
    line-height: 20px;
    text-transform: uppercase;
    color: #ffffff;

    background: #683FFF;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .qwer-enter-active, .qwer-leave-active {
    transition: opacity .5s;
  }

  .qwer-enter, .qwer-leave-to {
    opacity: 0;
  }

  .text-top {
    animation: text-top 1s forwards;
  }

  @keyframes text-top {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(80px);
    }
  }
</style>
