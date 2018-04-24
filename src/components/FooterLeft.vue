<template>
  <div class="footer">
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
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
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
    color: #E0E0E0;
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
