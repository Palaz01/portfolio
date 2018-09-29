<template>
	<transition enter-active-class="animated zoomIn">
		<main id="contact">
			<h1 class="lg-heading">
			Contact
			<span class="text-secondary">Me</span>
			</h1>
			<h2 class="sm-heading">
			This is how you can reach me...
			</h2>
			<div class="boxes">
				<div>
					<span class="text-secondary">Email: </span> {{email}}
				</div>
				<div>
					<span class="text-secondary">Phone: </span> {{phone}}
				</div>
				<div>
					<span class="text-secondary">Address: </span> {{adress}}
				</div>
			</div>
		</main>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			email: 'johndoe@test.com',
			phone: '(555) 555-5555',
			adress: '50 Main st Boston MA 02101'
		}
	}
}
</script>

<style scoped>

</style>
