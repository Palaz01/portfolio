<template>
	<div id="app">
		<nav class="main-navigation">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/work">Work</router-link>
			<router-link to="/contact">Contact</router-link>
		</nav>

		<router-view />
	</div>
</template>

<script>
import Home from './components/Home.vue'

export default {
	name: 'app',
	components: {
		Home
	}
}
</script>

<style lang="scss">
	@import 'scss/main.scss';
</style>
