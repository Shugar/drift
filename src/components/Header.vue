<template>
  <div class="header container">
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
    <ul class="main-nav__right">
      <div class="main-nav__right-wrapper">
        <li class="nav__item">
          <a href="#" class="nav__link">News</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">Store</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">Partners</a>
        </li>
      </div>
      <li class="nav__item nav__item-contact">
        <a href="#" class="nav__link">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    logo: () => import('@/components/Logo.vue')
  },

  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .header {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    z-index: 1;
  }

  .main-nav__left {
    position: relative;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    max-width: 504px;
    width: 100%;
    margin: 0 auto;
    padding-left: 16.5%;
  }

  .logo {
    position: absolute;
    top: 0;
    left: 0;
  }

  .main-nav__left-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    max-width: 262px;
    width: 100%;
  }

  .nav__item {
    padding-top: 83px;
  }

  .nav__link {
    text-transform: uppercase;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }

  .main-nav__right {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 46%;
    padding-left: 6.94%;
    padding-right: 6.94%;
  }

  .main-nav__right-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    max-width: 220px;
    width: 100%;
  }
</style>
