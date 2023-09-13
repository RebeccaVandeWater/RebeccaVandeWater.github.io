<template>
	<div class="text-center text-white font-medium relative m-5 min-w-fit group">
		<div class="h-32 w-full bg-rose-600 blur-lg inset-0 absolute opacity-0 sm:block hidden group-hover:opacity-100"
			id="skillIconShadow">
		</div>
		<img :src="img" :alt="title" :title="title"
			class="h-32 object-contain object-center relative md:grayscale lg:grayscale group-hover:grayscale-0 ">
		<p class="relative">
			{{ title }}
		</p>
	</div>
</template>

<script>
import { watchEffect } from 'vue'

export default {
	props: {
		title: { type: String, required: true },
		img: { type: String, required: true }
	},

	setup(props) {
		watchEffect()
		return {
			hoverColor() {
				let shadowElem = document.getElementById("skillIconShadow")
				shadowElem.classList.remove('hidden')
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>