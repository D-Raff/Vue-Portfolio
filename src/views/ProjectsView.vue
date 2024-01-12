<template>
    <div class="projects">
        <div class="row" v-if="projects">
            <div class="proj-card" v-for="project in projects" :key="project.name">

                <img class="p-photo" :src="project.image" alt="project-img">

                <div class="p-name">
                    {{ project.name }}
                </div>
                <div class="description">
                    {{ project.description }}
                </div>


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
.projects {
    border: 3px solid blue;
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.proj-card {
    border: 2px solid red;
    border-radius: 10px;
    width: 250px !important;
    height: 300px;
}

.p-photo {
    width: 100%;
}

img [alt='project-img'] {
    width: 250px;
    display: none;
}
</style>