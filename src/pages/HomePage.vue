<template>
  <!-- Navbar Section -->
  <div class="bg-gray-900 border-b-2 border-gray-700 text-white h-14 sticky top-0 z-10">
    <ul class="flex items-center flex-row sm:justify-around h-full font-montserrat text-lg">
      <li class="w-1/4 sm:text-center ms-10 sm:ms-0">
        <a href="#home" class="hover:shadow-lg hover:shadow-violet-500/60">Home</a>
      </li>
      <ul class="w-3/4 justify-evenly hidden sm:flex">
        <li class="hover:shadow-lg hover:shadow-violet-500/60">
          <a href="#about">About</a>
        </li>
        <li class="hover:shadow-lg hover:shadow-violet-500/60">
          <a href="#applications">Applications</a>
        </li>
        <!-- <li class="hover:shadow-lg hover:shadow-violet-500/60">
          <a href="#testimonials">Testimonials</a>
        </li> -->
        <li class="hover:shadow-lg hover:shadow-violet-500/60">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </ul>
  </div>

  <!-- Hero Section -->
  <div class="flex justify-center w-full min-h-screen" id="home">
    <div class="flex flex-col justify-center font-montserrat m-3">
      <p class="text-2xl md:text-3xl mb-5 font-medium lg:text-4xl slide text-heading text-white text-shadow">
        Rebecca VandeWater
      </p>
      <p class="text-4xl md:text-5xl mb-5 font-semibold lg:text-6xl slide text-heading text-white text-shadow">
        Full-Stack Software Engineer
      </p>
      <p class="text-2xl md:text-3xl mb-5 font-medium lg:text-4xl slide text-heading text-white text-shadow">
        Life-long Learner
      </p>
      <ContactInfo class="slide text-heading" />
    </div>
  </div>

  <!-- About Section -->
  <div class="bg-gray-900" id="about">
    <p class="text-white pl-5 pt-5 text-2xl font-montserrat font-semibold">
      My Skills
    </p>
    <SkillMarquee class="pt-2" />
  </div>
  <div class="flex justify-center items-center" id="about-me">
    <About />
  </div>

  <!-- Application Section -->
  <div class="h-2/3 flex flex-col bg-gray-900 text-white" id="applications">
    <div class="p-5 text-2xl font-semibold font-montserrat">
      <p>
        My Applications
      </p>
    </div>
    <div class="flex lg:justify-start justify-center mb-10 sm:mb-20 p-5">
      <div class="flex lg:flex-row flex-col w-5/6 items-center snap-normal fade-in">
        <div class="lg:w-5/6 lg:mr-5 mb-5 lg:mb-0 select-none" title="JABB Github Link">
          <a href="https://github.com/jaredrcarlson/bookclub" aria-label="JABB Github Link">
            <img :src="jabbImg" alt="JABB Book Club" class="object-contain object-center rounded-md shadow-lg shadow-violet-500">
          </a>
        </div>
        <div class="w-full font-montserrat">
          <p class="mb-2 text-xl font-medium">
            JABB Book Club
          </p>
          <div class="mb-3 text-md">
            <p>A full-stack application based around creating and interacting with book clubs and book lists.</p>
            <br>
            <p>This application was built on a team of four developers utilizing Scrum and Agile methods to organize team communication.</p>
            <br>
            <p>JABB uses MongoDB to store user data, and requests data from the New York Times and Google Books third party APIs. Additionally, its features were tested thoroughly in Postman and guided with user stories.</p>
          </div>
          <div class="flex justify-center select-none">
            <img :src="vueLogo" alt="Vue.js" class="object-contain object-center w-1/6 m-3 skill fade-in" title="Vue.js">
            <img :src="nodeLogo" alt="Node.js" class="object-contain object-center w-1/6 m-3 skill fade-in" title="Node.js">
            <img :src="mongoLogo3" alt="MongoDB" class="object-contain object-center w-1/6 m-3 skill fade-in" title="MongoDB">
            <img :src="postmanLogo" alt="Postman" class="object-contain object-center w-1/6 m-3 skill fade-in" title="Postman">
          </div>
        </div>
      </div>
    </div>
    <div class="flex lg:justify-end justify-center my-10 sm:my-20 p-5">
      <div class="flex lg:flex-row flex-col w-5/6 items-center snap-normal fade-in">
        <div class="lg:w-5/6 lg:mr-5 mb-5 lg:mb-0 select-none" title="Keepr Github Link">
          <a href="https://github.com/RebeccaVandeWater/KeeprVande" aria-label="Keepr Github Link">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Keepr" class="object-contain object-center shadow-lg rounded-md shadow-violet-500">
          </a>
        </div>
        <div class="w-full font-montserrat">
          <p class="mb-2 text-xl font-medium">
            Keepr
          </p>
          <div class="mb-3 text-md">
            <p>A full-stack social media application which allows users to create and interact with keeps and vaults.</p>
            <br> 
            <p>Build independently, it utilizes a Vue.js frontend and C# DotNet backend.</p>
            <br> 
            <p>Keepr uses MySQL to store user data, and was tested thoroughly in Postman.</p>
          </div>
          <div class="flex justify-center select-none">
            <img :src="vueLogo" alt="Vue.js" class="object-contain object-center w-1/6 m-3 skill fade-in" title="Vue.js">
            <img :src="csharpLogo" alt="C#" class="object-contain object-center w-1/6 m-3 skill fade-in" title="C#">
            <img :src="sqlLogo" alt="MySQL" class="object-contain object-center w-1/6 m-3 skill fade-in" title="MySQL">
            <img :src="postmanLogo" alt="Postman" class="object-contain object-center w-1/6 m-3 skill fade-in" title="Postman">
          </div>
        </div>
      </div>
    </div>
    <div class="flex lg:justify-start justify-center my-10 sm:my-20 p-5">
      <div class="flex lg:flex-row flex-col w-5/6 items-center snap-normal fade-in">
        <div class="lg:w-5/6 lg:mr-5 mb-5 lg:mb-0 select-none" title="Tower Github Link">
          <a href="https://github.com/RebeccaVandeWater/Tower-vande" aria-label="Tower Github Link">
            <img :src="towerImg" alt="Tower" class="object-contain object-center shadow-lg shadow-violet-500 rounded-md">
          </a>
        </div>
        <div class="w-full font-montserrat">
          <p class="mb-2 text-xl font-medium">
            Tower
          </p>
          <div class="mb-3 text-md">
            <p>A full-stack social media application based around creating and interacting with in-person events.</p>
            <br>
            <p>Tower was developed independently. It utilizes a MongoDB database, Vue.js frontend, and Node.js Express backend.</p>
            <br>
            <p>Tower is a feature-rich application, and allows users to create and cancel their events, comment on events, and obtain tickets for events.</p>
          </div>
          <div class="flex justify-center select-none">
            <img :src="vueLogo" alt="Vue.js" class="object-contain object-center w-1/6 m-3 skill fade-in" title="Vue.js">
            <img :src="nodeLogo" alt="Node.js" class="object-contain object-center w-1/6 m-3 skill fade-in" title="Node.js">
            <img :src="mongoLogo3" alt="MongoDB" class="object-contain object-center w-1/6 m-3 skill fade-in" title="MongoDB">
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Testimonial Section -->
  <!-- <div class="bg-gray-900 p-5" id="testimonials">
    <p class="text-white text-shadow text-2xl font-semibold font-montserrat">
      Testimonials
    </p>
    <div class="sm:flex">
      <Testimonial
        :img="'https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'"
        :name="'Really Cool Person'"
        :content="'<p>Rebecca has amazing skills! She is great to work with and a team player.</p> <br> <p>She would be a great fit at any company!</p>'" class="fade-in skill" />
      <Testimonial
        :img="'https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'"
        :name="'Really Cool Person'"
        :content="'<p>Rebecca has amazing skills! She is great to work with and a team player.</p> <br> <p>She would be a great fit at any company!</p>'" class="fade-in skill" />
      <Testimonial
        :img="'https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'"
        :name="'Really Cool Person'"
        :content="'<p>Rebecca has amazing skills! She is great to work with and a team player.</p> <br> <p>She would be a great fit at any company!</p>'" class="fade-in skill" />
    </div>
  </div> -->

  <!-- Contact Section -->
  <div class="flex flex-col items-center p-3 justify-center" id="contact">
    <ContactMe />
    <ContactInfo />
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
import vscodeLogo from '../assets/vscode.png';
import jabbImg from '../assets/jabb.jpg';
import towerImg from '../assets/Tower.jpg';
import ApplicationSummary from '../components/ApplicationSummary.vue';
import Testimonial from '../components/Testimonial.vue';
import About from '../components/About.vue';
import ContactMe from '../components/ContactMe.vue';
import { onMounted, onUnmounted } from 'vue';
import SkillMarquee from '../components/SkillMarquee.vue';
import ContactInfo from '../components/ContactInfo.vue';

export default {

  setup() {

    let fadeInElements = []

    const handleScroll = (evt) => {
      for(let i = 0; i < fadeInElements.length; i++){
        let elem = fadeInElements[i]
        if(isElemVisible(elem)){
          elem.style.opacity = '1'
          elem.style.transform = 'translateX(0)'
          elem.style.filter = 'blur(0px)'
          fadeInElements.splice(i, 1)
        }
      }
    }

    const isElemVisible = (el) => {
      let rect = el.getBoundingClientRect()
      let elemTop = rect.top + 100
      let elemBottom = rect.bottom
      return elemTop < window.innerHeight && elemBottom >= 0
    }

    onMounted(() => {
      fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
      document.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', handleScroll)
    })

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
      figmaLogo1,
      vscodeLogo,
      jabbImg,
      towerImg
    };
  },
  components: { SkillIcon, ApplicationSummary, Testimonial, About, ContactMe, SkillMarquee, ContactInfo }
}
</script>


<style lang="scss" scoped>
.fade-in {
    opacity: 0;
    transition: 1s all ease-in-out;
    transform: translateX(-100%);
    filter: blur(5px);
}

.skill{
  animation-delay: 100ms;
}

.skill:nth-child(2){
  animation-delay: 500ms;
}

.skill:nth-child(3){
  animation-delay: 700ms;
}

.skill:nth-child(4){
  animation-delay: 900ms;
}

#home {
  background-image: url('https://images.unsplash.com/photo-1534271057238-c2c170a76672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  animation: slidein 100s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes slidein {
  from {background-position: top;background-size:3000px; }
  to {background-position: -100px 0px;background-size:2750px;}
}

.slide{
  animation: slideup ease 2s forwards;
}

.text-heading:nth-child(1){
  opacity: 0;
  animation-delay: 300ms;
}
.text-heading:nth-child(2){
  opacity: 0;
  animation-delay: 600ms;
}

.text-heading:nth-child(3){
  opacity: 0;
  animation-delay: 900ms;
}
.text-heading:nth-child(4){
  opacity: 0;
  animation-delay: 1200ms;
}

@keyframes slideup{
  from{
    opacity: 0;
    transform: translateY(100%);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
}

#contact{
  background: linear-gradient(-45deg, #3c4274, #dd7497, #a25687, #48487c);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
}

#about-me{
  background: linear-gradient(-45deg, #3c4274, #dd7497, #a25687, #48487c);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>