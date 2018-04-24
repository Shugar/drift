<template>
  <div class="main-left">
    <div class="slider">
      <img src="@/assets/images/motorshow-img.png" key="1" v-if="count === 1" class="slider-foto">
      <img src="@/assets/images/t-shirt-white.png" key="2" v-if="count === 2" class="slider-foto">
      <img src="@/assets/images/motorshow-img.png" key="3" v-if="count === 3" class="slider-foto">
      <img src="@/assets/images/motorshow-img.png" key="4" v-if="count === 4" class="slider-foto">
      <div class="slider-arrow__wrapper">
        <div class="slider-arrow" @click="nextSlide">
        </div>
      </div>
    </div>
    <div class="text-block">
      <div class="text-block__desc">
        <div class="text-block__item">
          MotorShow
        </div>
        <div class="text-block__item">
          Bologna. Italy
        </div>
        <div class="text-block__item">
          2-10 December 2017
        </div>
      </div>
      <div class="text-block__date">
        DEC 9 — 2017
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 1
      }
    },

    methods: {
      nextSlide() {
        if (this.count < 4) {
          this.count++;
        } else {
          this.count = 1;
        }
      }
    }
  }
</script>

<style scoped>
.main-left {
    margin-top: 186px;
  }

  .slider {
    display: flex;
    flex-flow: row nowrap;

    max-width: 380px;
    width: 100%;
  }

  .slider-foto {
    max-width: 320px;
    width: 100%;
    min-height: 200px;

    background-size: cover;
  }

  .slider-arrow__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 60px;
    width: 100%;
    min-height: 200px;

    background: #ffffff;
  }

  .slider-arrow {
    width: 10px;
    height: 17px;

    background: url('../../assets/images/right-arrow.svg') no-repeat center;
  }

  .text-block {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    max-width: 380px;
    width: 100%;

    margin-top: 40px;
  }

  .text-block__desc {
    font-size: 36px;
    text-transform: uppercase;
    color: #ffffff;
  }

  .text-block__item {
    margin-bottom: 10px;
  }

  .text-block__item:last-child {
    margin-bottom: 0;
  }

  .text-block__date {
    font-size: 24px;
    color: #E0E0E0;
  }
</style>
