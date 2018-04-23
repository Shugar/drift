<template>
  <div class="main-slider">
    <div class="main-slider__header">
      <ul class="main-nav__left">
      <logo />
      <div class="main-nav__left-wrapper">
        <li class="nav__item">
          <a href="#" class="nav__link">Bio</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">PHOTO</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">Video</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">CALENDAR</a>
        </li>
      </div>
    </ul>
    </div>
    <div class="main-slider__container">
      <div class="main-text">
        <div class="main-text__big">
          <div class="main-text__big-item">
          <img src="../assets/images/drift.svg" class="main-text__big-item-drift">
          </div>
          <div class="main-text__big-item">
          <img src="../assets/images/is-my.svg" class="main-text__big-item-my">
          </div>
          <div class="main-text__big-item">
          <img src="../assets/images/therapy.svg" class="main-text__big-item-therapy">
          </div>
        </div>
        <div class="desc-wrapper">
          <div class="toggle">
            <div class="toggle__min-text">
              next up
            </div>
            <div class="toggle__big-text">
              Photos
            </div>
          </div>
          <div class="main-text__desc">
            <div class="main-text__desc-item">
              Alexander Dmitrenko, pilot
            </div>
            <div class="main-text__desc-item">
              of the Russian Drift Series
            </div>
          </div>
        </div>
        <a href="#" class="main-text__more">
          Learn more
        </a>
      </div>
    </div>
    <footer class="footer">
      <div class="share">
        Share
      </div>
      <div class="socials">
        <div class="socials-item socials-youtube">
          <img src="../assets/images/youtube.svg">
        </div>
        <div class="socials-item socials-youtube">
          <img src="../assets/images/inst.svg">
        </div>
        <div class="socials-item socials-youtube">
          <img src="../assets/images/facebook.svg">
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
  components: {
    logo: () => import('@/components/Logo.vue')
  },

  }
</script>
<style scoped>
  .main-slider {
    max-width: 780px;
    width: 100%;

    padding-left: 100px;
    padding-bottom: 80px;
    padding-right: 100px;
  }

  .main-nav__left {
    position: relative;

    display: flex;
    flex-flow: row nowrap;
    padding-left: 37.3%;
    width: 100%;

    z-index: 1;
  }

  .nav__link {
    text-transform: uppercase;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
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

  .main-nav__left-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    max-width: 262px;
    width: 100%;
    padding-top: 83px;
  }

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
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
  }

  .main-text__desc-item:first-child {
    margin-bottom: 6px;
  }

  .main-text__big {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;

    min-height: 320px;
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

  .footer {
    position: relative;
    z-index: 1;

    display: flex;
    flex-flow: row wrap;

    margin-top: 92px;
  }

  .share {
    width: 37.3%;;

    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
  }

  .socials {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    max-width: 100px;
    width: 100%;
  }
</style>
