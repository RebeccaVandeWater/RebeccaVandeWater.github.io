<template>
	<div class="flex w-5/6">
		<div class="w-3/4 mr-3">
			<img :src="img" :alt="title" class="object-contain object-center">
		</div>
		<div class="w-full">
			<p>
				{{ title }}
			</p>
			<p>
				{{ description }}
			</p>
			<div class="flex justify-around">
				<img :src="skill1img" :alt="skill1" class="object-contain object-center w-1/6">
				<img :src="skill2img" :alt="skill2" class="object-contain object-center w-1/6">
				<img :src="skill3img" :alt="skill3" class="object-contain object-center w-1/6">
				<img :src="skill4img" :alt="skill4" class="object-contain object-center w-1/6">
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