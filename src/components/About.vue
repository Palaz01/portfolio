<template>
	<transition enter-active-class="animated zoomIn">
		<main id="about">
			<h1 class="lg-heading" v-html="title">
			</h1>
			<h2 class="sm-heading">
				{{aboutIntro}}
			</h2>
			<div class="about-info">
				<img v-bind:src="imageSrc" alt="John Doe" class="bio-image">

				<div class="bio">
					<h3 class="text-secondary">{{bioTitle}}</h3>
					<p>{{bioContent}}</p>
				</div>

				<div v-for="(data, index) in job" :key='index' :class="data.class">
					<h3>{{data.employer}}</h3>
					<h6>{{data.position}}</h6>
					<p>{{data.jobDescription}}</p>
				</div>
			</div>
		</main>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			title: `About <span class="text-secondary">Me</span>`,
			aboutIntro: 'Let me tell you a few things...',
			bioTitle: 'BIO',
			imageSrc: require('../assets/images/me.jpg'),
			bioContent: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magni nam nisi quae vitae? Quod molestiae ipsa autem natus eum vel ducimus nulla harum voluptatem eligendi! Unde, reiciendis? Praesentium, laborum.',
			job: [
				{
					class: 'job job-1',
					employer: 'InteliArt',
					position: 'Junior Front-end Developer',
					jobDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo.'
				},
				{
					class: 'job job-2',
					employer: 'Designers ABC',
					position: 'Front End Developer',
					jobDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo.'
				},
				{
					class: 'job job-3',
					employer: 'Webworks',
					position: 'Graphic Designer',
					jobDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo.'
				}
			]
		}
	}
}
</script>

<style scoped>

</style>
