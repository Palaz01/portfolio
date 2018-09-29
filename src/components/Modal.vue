<template>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <main class="modal">
            <h1 class="lg-heading">{{item.projectTitle}}</h1>
            <h2 class="sm-heading">{{item.projectSubtitle}}</h2>
            <div class="modal-content">
                <div class="modal-image">
                    <img v-bind:src="item.projectImage" alt="">
                </div>
                <div class="modal-text">
                    <p>{{item.projectDesc}}</p>
                    <div>
                        <a class="btn-light" v-bind:href="item.link">
                            <i class="fas fa-eye"></i> Project
                        </a>
                        <a class="btn-dark" v-bind:href="item.projectCode">
                            <i :class="item.gitIcon"></i> Project
                        </a>
                    </div>
                </div>
            </div>
            <button class="close fas fa-times" @click="$emit('close')">
            </button>
        </main>
    </transition>
</template>

<script>
export default {
	props: [
        'item'
    ]
}
</script>

<style scoped>

</style>