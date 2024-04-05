<template>
    <div class="resume">
        <div class="cv">
            <h2 class="Heading">Download my CV</h2>
            <button class="btn">
                <a href="https://drive.google.com/file/d/1aJCpSHXEN5F3bX877mXaz21e8Uzhsl_a/view?usp=sharing" target="_blank"><i class="fa-solid fa-circle-down"></i></a>
            </button>
        </div>
        <div class="container" id="row" v-if="education">
            <div class="Heading">
                EDUCATION
            </div>
            <div class="education">
                <div class="ed-card" v-for="ed in education" :key="ed.id">
                    <div class="rotate"></div>
                    <div class="card-header">
                        <h3 class="year">
                            {{ ed.year }}
                        </h3>
                        <span class="hover">Hover Me!</span>
                        <span class="click">Click Me!</span>
                    </div>
                    <div class="card-body">
                        <div class="card-info">
                            {{ ed.description }}
                        </div>
                        <div class="card-info">
                            <span>Place:</span> {{ ed.place }}

                        </div>
                        <div class="card-info">
                            <span>Qualification type:</span> {{ ed.type }}
                        </div>
                    </div>



                </div>
            </div>

        </div>
        <div class="container" id="row-2" v-if="skills">
            <div class="Heading">
                SKILLS
            </div>
            <div class="skill-row">
                <div class="skill-card" v-for="skill in skills" :key="skill.title">
                    <div class="rotate"></div>
                    <div class="card-header">
                        <h3 class="title">
                            {{ skill.title }}
                        </h3>
                        <span class="hover">Hover Me!</span>
                        <span class="click">Click Me!</span>
                    </div>
                    <div class="card-body">
                        <div class="skill-logo">
                            <img class="skill-logo" :src="skill.logo" :alt="logo">
                        </div>
                        <div class="experience">
                            {{ skill.experience }}
                        </div>
                    </div>



                </div>
            </div>

        </div>
        <div class="container" id="row-3" v-if="work">
            <div class="Heading">
                Work Experience
            </div>
            <div class="work">
                <div class="work-card" v-for="experience in work" :key="experience.id">
                    <div class="rotate"></div>
                    <div class="card-header">
                        <h3 class="year2">
                            {{ experience.year }}
                        </h3>
                        <span class="hover">Hover Me!</span>
                        <span class="click">Click Me!</span>
                    </div>
                    <div class="card-body">
                        <div class="card-info">
                            {{ experience.description }}
                        </div>
                        <div class="card-info">
                            <span>Place:</span> {{ experience.place }}

                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        education() {
            return this.$store.state.education
        },
        skills() {
            return this.$store.state.skills
        },
        work() {
            return this.$store.state.work
        },
    },
    mounted() {
        this.$store.dispatch('fetcheducation')
        this.$store.dispatch('fetchskills')
        this.$store.dispatch('fetchwork')
    }
}
</script>

<style scoped>
.resume {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    box-sizing: border-box;
    gap: 30px;
}

.fa-solid{
    color: black;
    animation: glow 3s infinite;
    font-size: 50px;
    filter: drop-shadow(0px 0px 1px #7bc9e6);
}

#row {
    width: 90%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 0 !important;
    gap: 20px;
}
.education{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;
}
.work{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;
}
#row-2 {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
#row-3 {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
}

.skill-row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-bottom: 40px;
}

.Heading {
    font-family: iceland;
    font-size: 40px;
    color: #67C7EB;
    text-shadow: 0px 0px 3px #7bc9e6;
}

.ed-card {
    width: 250px !important;
    aspect-ratio: 1/1;
    background: black;
    border-radius: 50%;
    color: #B97D10;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    transition: 1s;
}
.work-card {
    width: 250px !important;
    aspect-ratio: 1/1;
    background: black;
    border-radius: 50%;
    color: #B97D10;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    transition: 1s;
}

.skill-card {
    width: 250px !important;
    aspect-ratio: 1/1;
    background: black;
    border-radius: 50%;
    color: #B97D10;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    transition: 1s;
}

.skill-logo {
    height: 50px !important;
    aspect-ratio: 1/1;
}

.rotate {
    width: 233px;
    aspect-ratio: 1/1;
    position: absolute;
    background: transparent;
    border-radius: 50%;
    border-right: 3px solid #B97D10;
    color: #B97D10;
    box-shadow: 2px 2px 2px 0px #525252;
}

:is(.year, .year2) {
    position: relative;
    top: 100px;
    color: #67C7EB;
    text-shadow: 0px 0px 3px #7bc9e6;
}
.year2{
    font-size: 20px;
}

.title {
    position: relative;
    top: 100px;
    color: #67C7EB;
    text-shadow: 0px 0px 3px #7bc9e6;
}

.hover{
    position: relative;
    top: 100px;
}

.click{
    display: none;
}

.card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 2s;
    font-size: 13px;
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    opacity: 0%;
    font-size: 1.4em;
}


.card-body span {
    color: #67C7EB;
    display: flex;
    justify-content: space-between;
}

.ed-card:hover {
    animation: lift 500ms ease 1 forwards;
    transform: perspective(500px) translateZ(90px);
    transform-style: preserve-3d;

    .card-body {
        visibility: visible;
    }

    .year {
        animation: move 500ms ease-in 1 forwards;
        transition: 2s;
    }

    .hover{
        display: none;
    }

    .click{
        display: none;
    }

    .card-body {
        animation: appear 2s forwards;
    }

    .rotate {
        animation: spin 1s linear infinite;
        background: black;

    }
}
.work-card:hover {
    animation: lift 500ms ease 1 forwards;
    transform: perspective(500px) translateZ(90px);
    transform-style: preserve-3d;

    .card-body {
        visibility: visible;
    }

    .year2 {
        animation: move2 500ms ease-in 1 forwards;
        transition: 2s;
    }

    .hover{
        display: none;
    }

    .click{
        display: none;
    }

    .card-body {
        animation: appear 2s forwards;
    }

    .rotate {
        animation: spin 1s linear infinite;
        background: black;

    }
}

.skill-card:hover {
    transform: perspective(500px) translateZ(80px);
    transform-style: preserve-3d;

    .card-body {
        visibility: visible;
    }

    .title {
        animation: move 500ms ease-in 1 forwards;
    }

    .hover{
        display: none;
    }

    .click{
        display: none;
    }

    .card-body {
        animation: appear 2s forwards;
    }

    .rotate {
        animation: spin 1s linear infinite;
        background: black;

    }
}
@keyframes glow {
    60%{
        filter: drop-shadow(0px 0px 5px #7bc9e6);
    }

}

@keyframes spin {
    from {
        rotate: 0deg;
    }

    to {
        rotate: 360deg;
    }
}

@keyframes move {
    to {
        top: 30px;
    }

}
@keyframes move2 {
    to {
        top: 60px;
    }

}

@keyframes appear {
    to {
        opacity: 100%;
    }
}

@media screen and (max-width: 420px) {
    .skill-card:hover {
        transform: perspective(800px) translateZ(10px);
    }
    .ed-card:hover{
        transform: perspective(800px) translateZ(10px);
    }
    .work-card:hover{
        transform: perspective(800px) translateZ(10px);
    }
    .hover{
        display: none;
    }
    .click{
        display: contents;
    }
}
</style>