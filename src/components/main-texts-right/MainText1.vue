<template>
  <div class="main-left">
    <div class="slider">
      <div class="slider-foto">
      </div>
      <div class="slider-arrow__wrapper">
        <div class="slider-arrow">
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

    background: url('../../assets/images/motorshow-img.png') no-repeat center;
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
