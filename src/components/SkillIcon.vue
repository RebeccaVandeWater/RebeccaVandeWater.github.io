<template>
	<div onmouseenter="" class="text-center text-white font-medium grayscale hover:grayscale-0 relative z-10">
		<img :src="img" :alt="title" :title="title" class="h-32">
		<p>
			{{ title }}
		</p>
	</div>
	<div class="h-40 w-32 bg-rose-600 blur-xl absolute hidden" id="skillIconShadow">
		Test
	</div>
</template>

<script>
export default {
	props: {
		title: { type: String, required: true },
		img: { type: String, required: true }
	},

	setup(props) {
		return {
		}
	}
}
</script>

<style lang="scss" scoped></style>