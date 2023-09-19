<script setup>
import HomePageVue from "../src/pages/HomePage.vue"
</script>

<template>
  <HomePageVue />
</template>

<style lang="scss">
::-webkit-scrollbar {
  background-color: #4c5259;
  width: .5em;
  height: .5em;
  border: 1px solid #4b4b4b;
  border-radius: 10em;
  box-shadow: inset 4px 4px #4b4b4b;
}

::-webkit-scrollbar-thumb {
  width: .25em;
  background-color: #676666;
  border-radius: 10em;
}

::-webkit-scrollbar-track {
  background-color: #4c5259;
}

::-webkit-scrollbar-thumb:hover {
  width: .25em;
  background-color: #7a7979;
  border-radius: 10em;
}
</style>
