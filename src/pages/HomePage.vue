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
  <div class="p-5 flex justify-center w-full min-h-screen">
    <div class="flex flex-col justify-center">
      <p class="text-2xl md:text-3xl mb-5 font-medium lg:text-4xl">
        Rebecca VandeWater
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
  <div class="bg-gray-900 h-1/3">
    <p class="text-white pl-5 pt-5 text-xl font-montserrat font-semibold">
      My Skills
    </p>
    <div class="w-full flex flex-row p-5 overflow-x-auto snap-x">
      <SkillIcon :title="'Javascript ES6'" :img="javascriptLogo" />
      <SkillIcon :title="'Vue.js'" :img="vueLogo" />
      <SkillIcon :title="'Node.js'" :img="nodeLogo" />
      <SkillIcon :title="'MongoDB'" :img="mongoLogo3" />
      <SkillIcon :title="'C#'" :img="csharpLogo" />
      <SkillIcon :title="'MySQL'" :img="sqlLogo" />
      <SkillIcon :title="'Postman'" :img="postmanLogo" />
      <SkillIcon :title="'Github'" :img="githubLogo" />
      <SkillIcon :title="'HTML5'" :img="htmlLogo" />
      <SkillIcon :title="'CSS3'" :img="cssLogo" />
      <SkillIcon :title="'Tailwind'" :img="tailwindLogo2" />
      <SkillIcon :title="'Bootstrap'" :img="bootstrapLogo" />
      <SkillIcon :title="'Figma'" :img="figmaLogo1" />
    </div>
  </div>
  <div>
    <About />
  </div>

  <!-- Application Section -->
  <div class="h-2/3 flex flex-col border-t-2 border-gray-300">
    <div class="p-5 text-xl font-semibold font-montserrat">
      <p>
        My Applications
      </p>
    </div>
    <div class="flex sm:justify-start justify-center mb-10 sm:mb-20 p-5">
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
  <div class="bg-gray-900 p-5">
    <p class="text-white text-xl font-semibold font-montserrat">
      Testimonials
    </p>
    <div class="sm:flex">
      <Testimonial
        :img="'https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'"
        :name="'Really Cool Person'"
        :content="'<p>Rebecca has amazing skills! She is great to work with and a team player.</p> <br> <p>She would be a great fit at any company!</p>'" />
      <Testimonial
        :img="'https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'"
        :name="'Really Cool Person'"
        :content="'<p>Rebecca has amazing skills! She is great to work with and a team player.</p> <br> <p>She would be a great fit at any company!</p>'" />
      <Testimonial
        :img="'https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'"
        :name="'Really Cool Person'"
        :content="'<p>Rebecca has amazing skills! She is great to work with and a team player.</p> <br> <p>She would be a great fit at any company!</p>'" />
    </div>
  </div>

  <!-- Contact Section -->
  <div class="flex justify-center">
    <ContactMe />
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
import postmanLogo from '../assets/postman.png';
import githubLogo from '../assets/github3.png';
import figmaLogo1 from '../assets/figma1.png';
import ApplicationSummary from '../components/ApplicationSummary.vue';
import Testimonial from '../components/Testimonial.vue';
import About from '../components/About.vue';
import ContactMe from '../components/ContactMe.vue';

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
      tailwindLogo2,
      postmanLogo,
      githubLogo,
      figmaLogo1
    };
  },
  components: { SkillIcon, ApplicationSummary, Testimonial, About, ContactMe }
}
</script>


<style lang="scss" scoped></style>