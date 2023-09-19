<template>
	<div class="flex sm:flex-row flex-col w-5/6 items-center snap-normal">
		<div class="sm:w-5/6 sm:mr-5 mb-5 sm:mb-0">
			<img :src="img" :alt="title" class="object-contain object-center">
		</div>
		<div class="w-full font-montserrat">
			<p class="mb-2 text-2xl font-medium">
				{{ title }}
			</p>
			<div class="mb-3 text-lg" v-html="description">
			</div>
			<div class="flex justify-center">
				<img :src="skill1img" :alt="skill1" class="object-contain object-center w-1/6 m-3" :title="skill1">
				<img :src="skill2img" :alt="skill2" class="object-contain object-center w-1/6 m-3" :title="skill2">
				<img :src="skill3img" :alt="skill3" class="object-contain object-center w-1/6 m-3" :title="skill3">
				<img :src="skill4img" :alt="skill4" class="object-contain object-center w-1/6 m-3" :title="skill4">
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		title: { type: String, required: true },
		img: { type: String, required: true },
		description: { type: String, required: true },
		skill1img: { type: String, required: true },
		skill1: { type: String, required: true },
		skill2img: { type: String, required: true },
		skill2: { type: String, required: true },
		skill3img: { type: String, required: true },
		skill3: { type: String, required: true },
		skill4img: { type: String, required: true },
		skill4: { type: String, required: true },
	},

	setup() {
		return {
		}
	}
}
</script>

<style lang="scss" scoped></style>