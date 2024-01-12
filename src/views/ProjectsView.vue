<template>
    <div class="projects">
        <div class="row" v-if="projects">
            <div class="proj-card" v-for="project in projects" :key="project.name">

                <div class="p-body">
                    <img class="p-photo" :src="project.image" alt="project-img">
    
                    <div class="p-name">
                        {{ project.name }}
                    </div>
                    <div class="description">
                        {{ project.description }}
                    </div>
                    <div class="links">
                        <a :href="project.gitHub">dtd</a>
                        <a :href="project.netlify">ft</a>
                    </div>
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
    width: 250px !important;
    height: 300px;
    padding: 0 !important;
}
.p-body{
    border: 3px solid #AA0505;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    padding: 10px;
}

.p-photo {
    width: 100%;
    height: 120px;
    object-fit: cover;
}

.p-name {
    font-family: iceland;
    font-size: 30px;
    color: #67C7EB;
    text-shadow: 0px 0px 3px #7bc9e6;
}
.description{
    font-size: 15px;
    color: #B97D10;
}
img [alt='project-img'] {
    width: 250px;
    display: none;
}
.links{
    border: 3px solid #AA0505;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
</style>