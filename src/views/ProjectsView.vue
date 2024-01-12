<template>
    <div class="projects">
        <img src="https://i.ibb.co/rkt8SGV/pngwing-com-7.png" alt="background">
        <div class="row container" v-if="projects">
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
                        <a :href="project.gitHub"><img src="https://i.ibb.co/YpJdk0b/github-mark-white.png" alt="icon"></a>
                        <a :href="project.netlify"><img
                                src="https://i.ibb.co/TL3FP3n/Simpleicons-Team-Simple-Netlify-512.png" alt="icon"></a>
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
    position: relative;
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.row{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width:90%;
    min-height: 80vh;
    gap: 1em;
    margin-top: 5em !important;
}

.proj-card {
    flex: 1;
    margin: 10px;
    padding: 20px;
    width: 250px !important;
    height: 300px;
    padding: 0 !important;
    transition: transform 1s;
    transform-style: preserve-3d;
}

.p-body {
    border: 3px solid #AA0505;
    border-radius: 10px;
    min-height: 350px;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
}

.p-photo {
    width: 100%;
    height: 120px;
    object-fit: cover;
}

.p-name {
    font-family: iceland;
    font-size: 25px;
    color: #67C7EB;
    text-shadow: 0px 0px 3px #7bc9e6;
}

.description {
    font-size: 15px;
    display: flex;
    flex-wrap: wrap;
    color: #B97D10;
}

.links {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

img[alt="background"] {
    position: absolute;
    height: 99vh;
    width: 100%;
    top: 0;
    object-fit: cover;
}

img[alt="icon"] {
    height: 30px;
    filter: drop-shadow(0px 0px 5px #7bc9e6);
}

.proj-card:hover {
    transform: perspective(500px) translateZ(100px);
    filter: drop-shadow(0px 0px 5px #7bc9e6);
}
</style>