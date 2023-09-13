<template>
  <!-- Navbar Section -->
  <div class="bg-gray-900 text-white h-14">
    <ul class="flex items-center flex-row justify-around h-full font-montserrat text-lg">
      <li class="w-1/4 text-center">
        Home
      </li>
      <div class="flex w-3/4 justify-evenly">
        <li>
          About
        </li>
        <li>
          Applications
        </li>
        <li>
          Testimonials
        </li>
        <li>
          Contact
        </li>
      </div>
    </ul>
  </div>

  <!-- Hero Section -->
  <div class="bg-gradient-to-r from-rose-400 via-pink-600 to-purple-600 h-1/4 flex">
    <div class="md:w-2/4 lg:w-3/5 ml-14 flex flex-col justify-center text-white">
      <p class="md:text-3xl mb-5 font-medium lg:text-4xl">
        Hi, I'm Rebecca VandeWater
      </p>
      <p class="md:text-5xl mb-5 font-semibold lg:text-6xl">
        Full-Stack Software Engineer
      </p>
      <p class="md:text-3xl mb-5 font-medium lg:text-4xl">
        Life-long Learner
      </p>
    </div>
    <div class="md:w-2/4 lg:w-2/5 flex justify-center items-center">
      <img src="../assets/Rebecca VandeWater 2 (1).jpg" alt="rebecca photo" class="rounded-3xl md:h-2/3 lg:h-3/5">
    </div>
  </div>

  <!-- About Section -->
  <div class="bg-gray-800 h-1/3 w-full flex flex-row p-5 overflow-x-auto">
    <SkillIcon :title="'Javascript ES6'" :img="javascriptLogo" />
    <SkillIcon :title="'Vue.js'" :img="vueLogo" />
    <SkillIcon :title="'Node.js'" :img="nodeLogo" />
    <SkillIcon :title="'MongoDB'" :img="mongoLogo3" />
    <SkillIcon :title="'C#'" :img="csharpLogo" />
    <SkillIcon :title="'MySQL'" :img="sqlLogo" />
    <SkillIcon :title="'HTML5'" :img="htmlLogo" />
    <SkillIcon :title="'CSS3'" :img="cssLogo" />
    <SkillIcon :title="'Tailwind'" :img="tailwindLogo" />
    <SkillIcon :title="'Bootstrap'" :img="bootstrapLogo" />
  </div>

  <!-- Application Section -->
  <div>

  </div>

  <!-- Testimonial Section -->
  <div>

  </div>

  <!-- Contact Section -->
  <div>

  </div>
</template>


<script>
import SkillIcon from '../components/SkillIcon.vue';
import javascriptLogo from '../assets/javascript.png';
import vueLogo from '../assets/vue.png';
import nodeLogo from '../assets/node.png';
import sqlLogo from '../assets/sql.png';
import mongoLogo1 from '../assets/mongo1.png';
import mongoLogo2 from '../assets/mongo2.png';
import mongoLogo3 from '../assets/mongo3.png';
import csharpLogo from '../assets/csharp.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import bootstrapLogo from '../assets/bootstrap.png';
import tailwindLogo from '../assets/tailwind.png'

export default {
  setup() {
    return {
      javascriptLogo,
      vueLogo,
      nodeLogo,
      sqlLogo,
      mongoLogo1,
      mongoLogo2,
      mongoLogo3,
      csharpLogo,
      htmlLogo,
      cssLogo,
      bootstrapLogo,
      tailwindLogo
    };
  },
  components: { SkillIcon }
}
</script>


<style lang="scss" scoped></style>