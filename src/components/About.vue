<template>
  <div class="flex flex-col sm:flex-row items-center justify-center p-5 w-2/3 bg-gray-900 rounded-lg m-3">
    <div class="w-1/2 order-2 sm:order-1 sm:mr-10 text-md font-montserrat text-white text-shadow ">
      <div>
        <p class="pb-2 text-2xl font-semibold">
          About Me
        </p>
        <p class="pb-2 text-lg italic">
          Hi, I'm Rebecca!
        </p>
      </div>
      <p class="pb-2">
        I'm a Full-Stack Software Engineer with an enthusiasm about learning and problem-solving. I have experience as
        an educator and an appreciation for equity, mindfulness, and integrity.
      </p>
      <p class="pb-2">
        I taught a variety of classrooms and students over three years as an Elementary School teacher. This included
        classrooms with a high poverty and refugee population, and with students who
        started their education during the COVID-19 pandemic.
      </p>
      <p class="pb-2">
        This experience has allowed me to see how online applications can help users from all backgrounds access
        important care and resources, or just stay in contact with their friends and loved ones! I aspire to build
        applications
        that are accessible to all types of users, and which have feature-rich interactivity.
      </p>
      <p class="pb-2">
        My hobbies include playing in and running D&D games, gardening, and embroidery. I love spending time with my
        family, and finding new adventures that widen my knowledge and understanding of the world around me.
      </p>
    </div>
    <div class="lg:w-1/2 flex justify-center items-center order-1 sm:order-3 select-none">
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