<template>
  <div class="flex flex-col lg:flex-row items-center justify-center p-5 lg:w-2/3 bg-gray-900 rounded-lg m-3">
    <div class="lg:w-1/2 order-2 lg:order-1 lg:mr-10 mt-5 lg:mt-0 text-md font-montserrat text-white text-shadow ">
      <div>
        <p class="pb-2 text-2xl font-semibold">
          About Me
        </p>
        <p class="pb-2 text-lg italic">
          Hi, I'm Rebecca!
        </p>
      </div>
      <p class="pb-2">
        I aspire to build applications that are accessible to all types of users, and which have feature-rich interactivity. I have experience as an educator and an appreciation for equity, mindfulness, and integrity. 
      </p>
      <p class="pb-2">
        The part of building an application that I enjoy the most is interacting with database transactions. I thoroughly enjoy problem-solving, and ensuring that a user is able to interact correctly with a database depending on their context.
      </p>
      <p class="pb-2">
        My hobbies include playing in and running D&D games, gardening, and embroidery. I love spending time with my family, and finding new adventures that widen my knowledge and understanding of the world around me.
      </p>
    </div>
    <div class="sm:w-1/3 lg:w-1/2 flex justify-center items-center order-1 lg:order-2 select-none">
      <img src="../assets/headshot.jpg" alt="rebecca photo"
        class="rounded-3xl object-contain object-center w-2/3 sm:w-auto">
    </div>
  </div>
</template>

<script>
export default {

  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>