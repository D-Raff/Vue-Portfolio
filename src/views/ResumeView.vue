<template>
    <div class="resume">
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
    },
    mounted() {
        this.$store.dispatch('fetcheducation')
        this.$store.dispatch('fetchskills')
    }
}
</script>

<style>
.resume {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    box-sizing: border-box;
    gap: 30px;
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

#row-2 {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.skill-row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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

.year {
    position: relative;
    top: 100px;
    color: #67C7EB;
    text-shadow: 0px 0px 3px #7bc9e6;
}

.title {
    position: relative;
    top: 100px;
    color: #67C7EB;
    text-shadow: 0px 0px 3px #7bc9e6;
}

.card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 2s;
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

    .card-body {
        animation: appear 2s forwards;
    }

    .rotate {
        animation: spin 1s linear infinite;
        background: black;

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

@keyframes appear {
    to {
        opacity: 100%;
    }
}

@media screen and (max-width: 344px) {
    .skill-card:hover {
        transform: perspective(800px) translateZ(10px);
    }
}
@media screen and (max-width: 401px) {
    .skill-card:hover {
        transform: perspective(800px) translateZ(10px);
    }
    .ed-card:hover{
        transform: perspective(800px) translateZ(10px);
    }
}
</style>