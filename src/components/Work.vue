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
					<a href="" v-on:click.prevent="openModal(data)">
						<img v-bind:src="data.projectImage" alt="Project">
					</a>
					<a v-bind:href="data.link" class="btn-light">
						<i class="fas fa-eye"></i> Project
					</a>
					<a v-if="(data.gitIcon)" v-bind:href="data.projectCode" class="btn-dark">
						<i :class="data.gitIcon"></i> {{data.gitName}}
					</a>
					<Modal v-show='showModal' :item="modalItem" @close="closeModal">
					</Modal>
				</div>
			</div>
		</main>
	</transition>
</template>

<script>
import Modal from './Modal.vue'
export default {
	components: { Modal },
	data() {
		return {
			showModal: false,
			modalItem: '',
			projects: [
				{
					projectImage: require('../assets/images/projects/project1.jpg'),
					projectLink: '',
					projektCode: '',
					gitName: 'GitHub',
					gitIcon: 'fab fa-github',
					projectTitle: 'First Project',
					projectSubtitle: 'Lorem ipsum dolor sit amet',
					projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan nulla vel neque hendrerit sodales. Vestibulum hendrerit semper ex vitae mattis. Maecenas nec aliquam est. Nulla aliquam nibh sed tellus ornare, at gravida est dapibus. Etiam hendrerit dolor sed venenatis fermentum. Donec et tempor risus, eget lacinia eros. Phasellus convallis semper turpis, non laoreet velit dictum eu. Etiam justo libero, viverra ut condimentum vel, porta vitae erat. Donec ut purus laoreet, feugiat urna nec, efficitur sem. Nunc ullamcorper, lacus ut pellentesque placerat, augue mauris feugiat neque, at lacinia elit mi ut tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus dui mi, lacinia non tempor varius, fermentum nec erat.'
				},
				{
					projectImage: require('../assets/images/projects/project2.jpg'),
					projectLink: '',
					projektCode: '',
					gitName: 'GitHub',
					gitIcon: 'fab fa-github',
					projectTitle: 'Second Project',
					projectSubtitle: 'Lorem ipsum dolor sit amet',
					projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan nulla vel neque hendrerit sodales. Vestibulum hendrerit semper ex vitae mattis. Maecenas nec aliquam est. Nulla aliquam nibh sed tellus ornare, at gravida est dapibus. Etiam hendrerit dolor sed venenatis fermentum. Donec et tempor risus, eget lacinia eros. Phasellus convallis semper turpis, non laoreet velit dictum eu. Etiam justo libero, viverra ut condimentum vel, porta vitae erat. Donec ut purus laoreet, feugiat urna nec, efficitur sem. Nunc ullamcorper, lacus ut pellentesque placerat, augue mauris feugiat neque, at lacinia elit mi ut tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus dui mi, lacinia non tempor varius, fermentum nec erat.'
				},
				{
					projectImage: require('../assets/images/projects/project3.jpg'),
					projectLink: '',
					projektCode: '',
					gitName: 'GitHub',
					gitIcon: 'fab fa-github',
					projectTitle: 'Third Project',
					projectSubtitle: 'Lorem ipsum dolor sit amet',
					projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan nulla vel neque hendrerit sodales. Vestibulum hendrerit semper ex vitae mattis. Maecenas nec aliquam est. Nulla aliquam nibh sed tellus ornare, at gravida est dapibus. Etiam hendrerit dolor sed venenatis fermentum. Donec et tempor risus, eget lacinia eros. Phasellus convallis semper turpis, non laoreet velit dictum eu. Etiam justo libero, viverra ut condimentum vel, porta vitae erat. Donec ut purus laoreet, feugiat urna nec, efficitur sem. Nunc ullamcorper, lacus ut pellentesque placerat, augue mauris feugiat neque, at lacinia elit mi ut tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus dui mi, lacinia non tempor varius, fermentum nec erat.'
				}				
			]			
		}
	},
	methods: {
		openModal(data) {
			this.showModal = true;
			this.modalItem = data;
		},
		closeModal() {
			this.selectedItem = ''
			this.showModal = false
		}
	}
}
</script>

<style scoped>

</style>
