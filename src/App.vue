<template>
  <div class="container">
    <TheNavigation></TheNavigation>
    <div class="head-body-container">
      <TheHeader></TheHeader>
      <TheBody></TheBody>
    </div>
  </div>
</template>

<script>
import TheBody from './layout/TheBody.vue'
import TheHeader from './layout/TheHeader.vue'
import TheNavigation from './layout/TheNavigation.vue'
export default {
  name: 'App',
  components: {
    TheBody,TheHeader,TheNavigation,
  }
}
</script>

<style>

  @import url(./css/main.css);
</style>
