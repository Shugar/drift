<template>
  <div>
    <header-component />
    <logo />
  </div>
</template>

<script>
  export default {
    name: 'Header',

    components: {
      headerComponent: () => import('@/components/Header.vue'),
      logo: () => import('@/components/Logo.vue')
    }
  }
</script>

<style scoped>

</style>