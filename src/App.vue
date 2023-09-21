<script setup>
import HomePageVue from "../src/pages/HomePage.vue"
// server=54.188.92.199;user id=;password=;port=3306
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

html {
  scroll-behavior: smooth;
}

.text-shadow{
  text-shadow: 1px 1px 1px black;
}
</style>
