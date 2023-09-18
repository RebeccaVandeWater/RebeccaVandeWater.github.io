<template>
  <!-- Navbar Section -->
  <div class="bg-gray-900 text-white h-14">
    <ul class="flex items-center flex-row sm:justify-around h-full font-montserrat text-lg">
      <li class="w-1/4 sm:text-center ms-10 sm:ms-0">
        Home
      </li>
      <div class="w-3/4 justify-evenly hidden sm:flex">
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
  <div class="md:flex sm:flex-col md:flex-row">
    <div class="md:w-2/4 lg:w-2/5 flex justify-center items-center sm:order-1 md:order-2 p-4">
      <img src="../assets/Rebecca VandeWater 2 (1).jpg" alt="rebecca photo"
        class="rounded-3xl object-contain object-center w-2/3 sm:w-auto sm:h-1/4 md:h-2/3 lg:h-3/5">
    </div>
    <div class="w-auto md:w-2/4 lg:w-3/5 ml-6 sm:ml-14 flex flex-col md:justify-center sm:order-2 md:order-1">
      <p class="text-2xl md:text-3xl mb-5 font-medium lg:text-4xl">
        Hi, I'm Rebecca VandeWater
      </p>
      <p class="text-4xl md:text-5xl mb-5 font-semibold lg:text-6xl">
        Full-Stack Software Engineer
      </p>
      <p class="text-2xl md:text-3xl mb-5 font-medium lg:text-4xl">
        Life-long Learner
      </p>
    </div>
  </div>

  <!-- About Section -->
  <div class="bg-gray-900 h-1/3 w-full flex flex-row p-5 overflow-x-auto snap-x">
    <SkillIcon :title="'Javascript ES6'" :img="javascriptLogo" />
    <SkillIcon :title="'Vue.js'" :img="vueLogo" />
    <SkillIcon :title="'Node.js'" :img="nodeLogo" />
    <SkillIcon :title="'MongoDB'" :img="mongoLogo3" />
    <SkillIcon :title="'C#'" :img="csharpLogo" />
    <SkillIcon :title="'MySQL'" :img="sqlLogo" />
    <SkillIcon :title="'HTML5'" :img="htmlLogo" />
    <SkillIcon :title="'CSS3'" :img="cssLogo" />
    <SkillIcon :title="'Tailwind'" :img="tailwindLogo2" />
    <SkillIcon :title="'Bootstrap'" :img="bootstrapLogo" />
  </div>

  <!-- Application Section -->
  <div class="h-2/3 flex flex-col">
    <div class="flex sm:justify-start justify-center my-10 sm:my-20 p-5">
      <ApplicationSummary :title="'JABB Book Club'"
        :img="'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'"
        :description="'<p>An application based around creating and interacting with book clubs and book lists.</p> <br> <p>Built on a development team of four, utilizing Scrum and Agile methods to organize team communication.</p>'"
        :skill1img="vueLogo" :skill1="'Vue.js'" :skill2img="csharpLogo" :skill2="'C#'" :skill3img="sqlLogo"
        :skill3="'MySQL'" />
    </div>
    <div class="flex sm:justify-end justify-center my-10 sm:my-20 p-5">
      <ApplicationSummary :title="'Keepr'"
        :img="'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'"
        :description="'<p>An application created as the final from CodeWorks.</p> <br> <p>Build independently, it utilizes a MySQL database, Vue.js frontend, and C# DotNet backend.</p>'"
        :skill1img="vueLogo" :skill1="'Vue.js'" :skill2img="csharpLogo" :skill2="'C#'" :skill3img="sqlLogo"
        :skill3="'MySQL'" />
    </div>
    <div class="flex sm:justify-start justify-center my-10 sm:my-20 p-5">
      <ApplicationSummary :title="'Tower'"
        :img="'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'"
        :description="'<p>An application based around creating and interacting with in-person events.<p> <br> <p>Built independently, it utilizes a MongoDB database, Vue.js frontend, and Node.js Express backend.</p>'"
        :skill1img="vueLogo" :skill1="'Vue.js'" :skill2img="nodeLogo" :skill2="'Node.js'" :skill3img="mongoLogo3"
        :skill3="'MongoDB'" />
    </div>
  </div>

  <!-- Testimonial Section -->
  <div class="bg-gray-900">
    <Testimonial
      :img="'https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'" />
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
import mongoLogo3 from '../assets/mongo3.png';
import csharpLogo from '../assets/csharp.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import bootstrapLogo from '../assets/bootstrap.png';
import tailwindLogo2 from '../assets/tailwind2.png';
import ApplicationSummary from '../components/ApplicationSummary.vue';
import Testimonial from '../components/Testimonial.vue';

export default {
  setup() {
    return {
      javascriptLogo,
      vueLogo,
      nodeLogo,
      sqlLogo,
      mongoLogo3,
      csharpLogo,
      htmlLogo,
      cssLogo,
      bootstrapLogo,
      tailwindLogo2
    };
  },
  components: { SkillIcon, ApplicationSummary, Testimonial }
}
</script>


<style lang="scss" scoped>
div::-webkit-scrollbar {
  background-color: #4c5259;
  width: .5em;
}

div::-webkit-scrollbar-thumb {
  width: .5em;
  background-color: #676666;
  border-radius: 10em;
}
</style>