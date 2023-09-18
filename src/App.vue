<script setup>
import HomePageVue from "../src/pages/HomePage.vue"
</script>

<template>
  <HomePageVue />
</template>

<style lang="scss">
@media(min-width: 768px) {
  ::-webkit-scrollbar {
    background-color: #4c5259;
    width: .5em;
    height: .5em;
    border: 1px solid #383838;
  }

  ::-webkit-scrollbar-thumb {
    width: .25em;
    background-color: #676666;
    border-radius: 10em;
  }

  ::-webkit-scrollbar-thumb:hover {
    width: .25em;
    background-color: #7a7979;
    border-radius: 10em;
  }
}
</style>
