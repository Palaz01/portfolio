<template>
	<div id="app">
		<header>
			<button class="menu-btn" v-bind:class="{close: showNav}" v-on:click="openNav()">
				<div class="btn-line"></div>
				<div class="btn-line"></div>
				<div class="btn-line"></div>
			</button>			
			<nav  class="menu">
				<transition enter-active-class="animated slideInDown">
					<div v-if="showNav" class="menu-branding">
						<div class="portrait"></div>
					</div>
				</transition>
				<transition enter-active-class="animated slideInUp">
					<div v-if="showNav" class="menu-nav">
						<router-link class="nav-link" to="/" v-on:click.native="openNav()">Home</router-link>
						<router-link class="nav-link" to="/about" v-on:click.native="openNav()">About</router-link>
						<router-link class="nav-link" to="/skills" v-on:click.native="openNav()">Skills</router-link>
						<router-link class="nav-link" to="/work" v-on:click.native="openNav()">Work</router-link>
						<router-link class="nav-link" to="/contact" v-on:click.native="openNav()">Contact</router-link>
					</div>
				</transition>
			</nav>
		</header>
		<router-view />
	</div>
</template>

<script>
import Home from './components/Home.vue'

export default {
	name: 'app',
	components: {
		Home
	},
	data() {
		return {
			showNav: false
		}
	},
	methods: {
		openNav: function() {
			if(!this.showNav) {
				this.showNav = true;
			} else {
				this.showNav = false;
			}
		}
	}
}
</script>

<style lang="scss">
	@import 'scss/main.scss';
</style>
