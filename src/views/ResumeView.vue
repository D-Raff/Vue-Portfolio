<template>
    <div class="resume">
        <div class="row" v-if="education">
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
</template>

<script>
export default {
    computed: {
        education() {
            return this.$store.state.education
        }
    },
    mounted() {
        this.$store.dispatch('fetcheducation')
    }
}
</script>

<style>
.resume {
    border: 3px solid blue;
    height: 97vh;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.row {
    width: 90%;
    height: 250px;
    display: flex;
    justify-content: space-between;
    /* border: 3px solid blue; */
    position: relative;
    bottom: 16%;
}

.ed-card {
    width: 250px !important;
    aspect-ratio: 1/1;
    background: transparent;
    border-radius: 50%;
    color: #B97D10;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
}
.rotate{
    width: 250px;
    aspect-ratio: 1/1;
    position: absolute;
    background: transparent;
    border-radius: 50%;
    border-right: 3px solid #B97D10;
    color: #B97D10;
    box-shadow: 2px 2px 2px 0px #525252;
}
.rotate:hover{
    animation: spin 1s linear  infinite;
}
.year {
    position: relative;
    top: 100px;
    color: #67C7EB;
    text-shadow: 0px 0px 3px #7bc9e6;
}
.card-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    visibility: hidden;
}

.card-body span {
    color: #67C7EB;
    display: flex;
    justify-content: space-between;
}

.ed-card:hover {
    animation: lift 500ms ease 1 forwards;
    .card-body{
        visibility: visible;
    }
    .year{
        animation: move 500ms ease-in 1 forwards;
    }
}

@keyframes lift {
    to {
        transform: perspective(500px) translateZ(50px);
        transform-style: preserve-3d;
        width: 300px !important;
        background: transparent;
        color: #B97D10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

@keyframes spin {
    from{
        rotate: 0deg;
    }
    to{
        rotate: 360deg;
    }
}

@keyframes move {
    to{
        top: 50px;
    }
    
}

</style>