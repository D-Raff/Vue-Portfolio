<template>     
    <div class="projects">
        <div class="row" v-if="projects">
            <div class="proj-card" v-for="project in projects" :key="project.name">
                {{ project.name }}
            </div>
        </div>
    </div>
</template>


<script>
export default {
    computed: {
        projects() {
            return this.$store.state.projects
        },
    },
    mounted() {
        this.$store.dispatch('fetchprojects')
    }
}
</script>


<style>
    
</style>