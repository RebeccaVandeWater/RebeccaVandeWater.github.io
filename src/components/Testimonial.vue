<template>
  <div class="bg-gray-600 flex flex-col h-1/3">
    <div>
      <img :src="img" :alt="name" class="object-contain object-center h-32 w-32">
      <span>
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

<style language="scss" scoped></style>