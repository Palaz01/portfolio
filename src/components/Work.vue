<template>
	<transition enter-active-class="animated zoomIn">
		<main id="work">
			<h1 class="lg-heading">
			My
			<span class="text-secondary">Work</span>
			</h1>
			<h2 class="sm-heading">
			Check out some of my projects...
			</h2>
			<div class="projects">
				<div v-for="(data, index) in projects" :key='index' class="item">
					<a href="">
						<img v-bind:src="data.projectImage" alt="Project">
					</a>
					<a v-bind:href="data.link" class="btn-light">
						<i class="fas fa-eye"></i> Project
					</a>
					<a v-if="(data.gitIcon)" v-bind:href="data.projectCode" class="btn-dark">
						<i :class="data.gitIcon"></i> {{data.gitName}}
					</a>
				</div>
			</div>
		</main>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{
					projectImage: require('../assets/images/projects/project1.jpg'),
					projectLink: '',
					projektCode: '',
					gitName: 'GitHub',
					gitIcon: 'fab fa-github'
				},
				{
					projectImage: require('../assets/images/projects/project2.jpg'),
					projectLink: '',
					projektCode: '',
					gitName: 'GitHub',
					gitIcon: 'fab fa-github'
				},
				{
					projectImage: require('../assets/images/projects/project3.jpg'),
					projectLink: '',
					projektCode: '',
					gitName: 'GitHub',
					gitIcon: 'fab fa-github'
				}				
			]			
		}
	}
}
</script>

<style scoped>

</style>
