<script setup>
import HomePageVue from "../src/pages/HomePage.vue"

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElems = document.querySelectorAll('.hidden');

hiddenElems.forEach((el) => observer.observe(el));
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

.fade-out {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all 1s;
}

.fade-in {
  opacity: 0;
  transform: translateY(40%);
  transition: all 1s ease-out;
}

.skill:nth-child(2) {
  transition-delay: 200ms;
}

.skill:nth-child(3) {
  transition-delay: 400ms;
}

.skill:nth-child(4) {
  transition-delay: 600ms;
}

@media(prefers-reduced-motion) {
  .fade-out {
    transition: none;
  }
}
</style>
