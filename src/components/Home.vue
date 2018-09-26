<template>
	<main id="home">
		<h1 class="lg-heading">
		{{firstname}}
		<span class="text-secondary">{{lastname}}</span>
		</h1>
		<h2 class="sm-heading">
		{{title}}
		</h2>
		<div class="icons">
		<a v-for="(data, index) in social" :key='index' v-bind:href="data.link">
			<i :class="data.icon"></i>
		</a>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			firstname: 'John',
			lastname: 'Doe',
			title: 'front-end-developer',
			social: [
				{
				link: '',
				icon: 'fab fa-facebook fa-2x'
				},
				{
				link: '',
				icon: 'fab fa-linkedin fa-2x'
				},
				{
				link: '',
				icon: 'fab fa-github fa-2x'
				},
				{
				link: '',
				icon: 'fab fa-codepen fa-2x'
				}
			]
		}
	}
}
</script>

<style scoped>

</style>
