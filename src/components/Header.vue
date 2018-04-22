<template>
  <div class="header container">
    <ul class="main-nav__left">
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
    </ul>
    <ul class="main-nav__right">
      <li class="nav__item">
        <a href="#" class="nav__link">News</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Store</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Partners</a>
      </li>
      <li class="nav__item nav__item-contact">
        <a href="#" class="nav__link">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 83px;
  }

  .main-nav__left {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 54%;
    padding-left: 22.2%;
    padding-right: 12.2%;

    font-size: 20px;
    line-height: 23px; 
  }

  .nav__link {
    text-transform: uppercase;
    /* color: #ffffff; */
  }

  .main-nav__right {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 46%;
    padding-left: 6.94%;
    padding-right: 6.94%;
  }

  .nav__item-contact {
    padding-left: 30%;
  }

</style>
