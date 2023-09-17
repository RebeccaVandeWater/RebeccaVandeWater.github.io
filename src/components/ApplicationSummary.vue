<template>
	<div>
		<img :src="img" :alt="title" class="object-contain object-center">
	</div>
	<div>
		<p>
			{{ title }}
		</p>
		<p>
			{{ description }}
		</p>
	</div>
</template>

<script>

export default {
	props: {
		title: { type: String, required: true },
		img: { type: String, required: true },
		description: { type: String, required: true }
	},

	setup() {
		return {
		}
	}
}
</script>

<style lang="scss" scoped></style>