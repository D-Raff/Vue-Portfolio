<template>
    <div class="projects">
        <!-- <img src="https://i.ibb.co/rkt8SGV/pngwing-com-7.png" alt="background"> -->
        <div class="container proj-cont" v-if="projects">
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
                        <a :href="project.gitHub" target="_blank"><img src="https://i.ibb.co/YpJdk0b/github-mark-white.png" alt="icon"></a>
                        <a :href="project.link" target="_blank"><img
                                src="https://iili.io/JNSjk9R.png" alt="icon"></a>
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
    min-height: 120vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 7em;
    justify-content: center;
    background: url("https://i.ibb.co/rkt8SGV/pngwing-com-7.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
}
.proj-cont{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-bottom: 4rem;
}

.proj-card {
    margin: 10px;
    padding: 20px;
    width: 250px !important;
    padding: 0;
    transition: transform 1s;
    transform-style: preserve-3d;
}

.p-body {
    border: 3px solid #AA0505;
    border-radius: 10px;
    height: 350px;
    width: 250px;
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
    filter: drop-shadow(0px 0px 3px #7bc9e6);
}
@media screen and (max-width: 420px) {
    .projects{
        background-attachment: fixed;
        background-position: center;
        background-repeat: repeat;
    }
    .proj-card:hover {
    transform: none;
    filter: none;
}
}
</style>