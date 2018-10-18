<template>
	<transition enter-active-class="animated zoomIn">
		<main id="skills">
			<h1 class="lg-heading">
			My
			<span class="text-secondary">Skills</span>
			</h1>
			<h2 class="sm-heading">
			I have experience in these technologies
			</h2>
			<div class="skills-wrap">
				<div  v-for="(data, index) in skills" :key='index'>
					<vue-circle
						:progress='data.progress'
						:size="180"
						:reverse="false"
						line-cap="round"
						:fill="fill"
						empty-fill="rgba(255, 255, 255, .1)"
						:animation-start-value="0.0"
						insert-mode="append"
						:thickness="12"
						:show-percent="false">
						<h2>{{data.skillName}}</h2>
					</vue-circle>
				</div>
			</div>
		</main>
	</transition>
</template>

<script>
	import VueCircle from 'vue2-circle-progress/src/index.vue'
	export default {
	components: {
		VueCircle
	},
	data(){
      return{
        fill : { color: '#64ffda' },
		skills: [
			{
				progress: 80,
				skillName: 'Html5'
			},
			{
				progress: 80,
				skillName: 'CSS/Scss'
			},
			{
				progress: 30,
				skillName: 'Javascript'
			},
			{
				progress: 70,
				skillName: 'Wordpress'
			}			
		]
      }
	}
}
</script>

<style scoped>
</style>