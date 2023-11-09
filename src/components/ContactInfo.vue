<template>
  <div class="flex">
    <button title="LinkedIn" class="me-4 hover:scale-105 p-1 rounded-lg hover:bg-white bg-gray-50 shadow-sm shadow-gray-950">
      <a href="https://www.linkedin.com/in/rebecca-vandewater/" aria-label="LinkedIn Hyperlink"><svg-icon type="mdi" :path="path"></svg-icon></a>
    </button>
    <button title="Github" class="me-4 hover:scale-105 p-1 rounded-lg hover:bg-white bg-gray-50 shadow-sm shadow-gray-950">
      <a href="https://github.com/RebeccaVandeWater" aria-label="Github Hyperlink"><svg-icon type="mdi" :path="path2"></svg-icon></a>
    </button>
    <button class="me-4 p-1 px-2 rounded-lg bg-gray-50 hover:bg-white shadow-sm shadow-gray-950 hover:scale-105" title="Resume">
      <a :href="resume" download class="flex"  aria-label="Resume Download Link"><svg-icon type="mdi" :path="path3"></svg-icon><span class="italic">Resume</span></a>
    </button>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiDownload } from '@mdi/js';
import resume from '../assets/Resume VandeWater.pdf'

export default {
  name: "my-component",

  setup() {
    return {
      path: mdiLinkedin,
      path2: mdiGithub,
      path3: mdiDownload,
      resume
    }
  },
  components: {SvgIcon}
}
</script>