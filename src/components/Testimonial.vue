<template>
  <div class="bg-gray-600 flex flex-col h-2/3">
    <div>
      <div class="w-20 h-20">
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

<style language="scss" scoped>
.avatar-img {
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
}
</style>