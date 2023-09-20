<template>
  <div
    class="bg-slate-600 flex flex-col h-2/3 sm:w-1/3 text-white p-4 m-3 rounded-md font-montserrat shadow-md shadow-violet-400">
    <div class="flex items-center mb-2">
      <div class="pr-3 select-none">
        <img :src="img" :alt="name" class="rounded-full object-cover object-top h-20 w-20">
      </div>
      <span class="font-medium">
        {{ name }}
      </span>
    </div>
    <div class="h-28 overflow-auto" v-html="content">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: String, required: true },
    img: { type: String, required: true },
    name: { type: String, required: true }
  },

  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>