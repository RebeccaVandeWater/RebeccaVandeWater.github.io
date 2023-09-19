<template>
  <div class="bg-gray-600 flex flex-col h-2/3 sm:w-1/3 text-white p-4 m-3">
    <div class="flex items-center mb-2">
      <div class="pr-3">
        <img :src="img" :alt="name" class="avatar-img">
      </div>
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

<style lang="scss" scoped>
.avatar-img {
  height: 4.5em;
  width: 4.5em;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
}
</style>