<template>
    <div class="resume">
        <div class="row" v-if="education">
            <div class="ed-card" v-for="ed in education" :key="ed.id">
                <div class="card-header">
                    <h3 class="year">
                        {{ ed.year }}
                    </h3>
                </div>
                <div class="card-body">
                    <div>
                        {{ ed.description }}
                    </div>
                    <div>
                        <span>Place:</span> {{ ed.place }}
                        
                    </div>
                    <div>
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
.ed-card{
    width: 250px !important;
    height: 255px;
    border: 3px solid #B97D10;
    background: transparent;
    border-radius: 10px;
    color: #B97D10;
    text-align: left;
    box-shadow: 2px 2px 2px 0px #525252;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.year{
    color: #67C7EB;
    text-shadow: 0px 0px 3px #7bc9e6;
}
.card-body{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.card-body span{
    color: #67C7EB;
    display: flex;
    justify-content: space-between;
}

.ed-card:hover{
    width: 250px !important;
    background: #6A0C0B;
    border-radius: 10px;
    color: #B97D10;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: lift 500ms ease 1 forwards;
}

@keyframes lift {
    to{
        transform: perspective(500px) translateZ(50px);
        box-shadow: 0px 0px 10px 5px #7bc9e6;
        transform-style: preserve-3d;
    }
}
</style>