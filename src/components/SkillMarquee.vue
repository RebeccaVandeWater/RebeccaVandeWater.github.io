<template>
  <div class="flex whitespace-nowrap overflow-x-scroll motion-safe:overflow-x-hidden">
    <div class="relative p-5">
      <ul class="flex motion-safe:animate-marquee">
        <li>
          <SkillIcon :title="'Javascript ES6'" :img="javascriptLogo" />
        </li>
        <li>
          <SkillIcon :title="'Vue.js'" :img="vueLogo" />
        </li>
        <li>
          <SkillIcon :title="'Node.js'" :img="nodeLogo" />
        </li>
        <li>
          <SkillIcon :title="'MongoDB'" :img="mongoLogo3" />
        </li>
        <li>
          <SkillIcon :title="'C#'" :img="csharpLogo" />
        </li>
        <li>
          <SkillIcon :title="'MySQL'" :img="sqlLogo" />
        </li>
        <li>
          <SkillIcon :title="'Postman'" :img="postmanLogo" />
        </li>
        <li>
          <SkillIcon :title="'Github'" :img="githubLogo" />
        </li>
        <li>
          <SkillIcon :title="'HTML5'" :img="htmlLogo" />
        </li>
        <li>
          <SkillIcon :title="'CSS3'" :img="cssLogo" />
        </li>
        <li>
          <SkillIcon :title="'Tailwind'" :img="tailwindLogo2" />
        </li>
        <li>
          <SkillIcon :title="'Bootstrap'" :img="bootstrapLogo" />
        </li>
        <li>
          <SkillIcon :title="'Figma'" :img="figmaLogo1" />
        </li>
        <li>
          <SkillIcon :title="'VS Code'" :img="vscodeLogo" />
        </li>
      </ul>
      <ul class="flex motion-safe:animate-marquee2 absolute bottom-5">
        <li>
          <SkillIcon :title="'Javascript ES6'" :img="javascriptLogo" />
        </li>
        <li>
          <SkillIcon :title="'Vue.js'" :img="vueLogo" />
        </li>
        <li>
          <SkillIcon :title="'Node.js'" :img="nodeLogo" />
        </li>
        <li>
          <SkillIcon :title="'MongoDB'" :img="mongoLogo3" />
        </li>
        <li>
          <SkillIcon :title="'C#'" :img="csharpLogo" />
        </li>
        <li>
          <SkillIcon :title="'MySQL'" :img="sqlLogo" />
        </li>
        <li>
          <SkillIcon :title="'Postman'" :img="postmanLogo" />
        </li>
        <li>
          <SkillIcon :title="'Github'" :img="githubLogo" />
        </li>
        <li>
          <SkillIcon :title="'HTML5'" :img="htmlLogo" />
        </li>
        <li>
          <SkillIcon :title="'CSS3'" :img="cssLogo" />
        </li>
        <li>
          <SkillIcon :title="'Tailwind'" :img="tailwindLogo2" />
        </li>
        <li>
          <SkillIcon :title="'Bootstrap'" :img="bootstrapLogo" />
        </li>
        <li>
          <SkillIcon :title="'Figma'" :img="figmaLogo1" />
        </li>
        <li>
          <SkillIcon :title="'VS Code'" :img="vscodeLogo" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
import SkillIcon from '../components/SkillIcon.vue';

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
      figmaLogo1,
      vscodeLogo,
      jabbImg,
      towerImg
    }
  },
  components: { SkillIcon }
}
</script>

<style lang="scss" scoped>

</style>