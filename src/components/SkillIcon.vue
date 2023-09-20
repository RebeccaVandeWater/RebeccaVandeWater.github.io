<template>
  <div class="w-full flex flex-col justify-center items-center text-white font-medium relative mx-10 group">
    <div
      class="h-28 w-1/3 bg-violet-500 blur-md inset-0 absolute rounded-t-sm m-auto top-0 bottom-0 left-0 right-0 sm:block hidden opacity-0 group-hover:opacity-100 shadow-perspective">
    </div>
    <p class="relative text-lg opacity-0 group-hover:opacity-100">
      {{ title }}
    </p>
    <img :src="img" :alt="title" :title="title"
      class="h-32 object-contain object-center relative md:grayscale lg:grayscale group-hover:grayscale-0">
  </div>
</template>

<script>

export default {
  props: {
    title: { type: String, required: true },
    img: { type: String, required: true }
  },

  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.shadow-perspective {
  transform: perspective(1.5em) rotateX(28deg) scale(1, .5);
}
</style>