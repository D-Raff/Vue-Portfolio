<template>
    <div class="test-page">
        <div class="testimonials" v-if="testimonials">
            <div class="test-card" v-for="test in testimonials" :key="test.name">
                <div class="content">
                    <div class="front">
                        <div class="test-img">
                            <img :src="test.profile" alt="Test-photo">
                        </div>
                        <div class="Name">
                            {{ test.name }} {{ test.surname }}
                        </div>
                    </div>
                    <div class="back">
                        {{ test.quotes }}
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        },
    },
    mounted() {
        this.$store.dispatch('fetchtestimonials')
    }
}
</script>



<style scoped>
.test-page {
    margin-top: 6em;
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.testimonials {
    display: flex;
    flex-wrap: wrap;
    min-height: 100%;
    width: 90%;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

.test-card {
    border-radius: 10px;
    width: 250px;
    height: 610px;
    display: flex;
    flex-wrap: wrap;
    color: #FBCA03;
    perspective: 500px;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px #48abe0,
              0 0 10px 6px #ebecca,
              0 0 20px 10px #8a2be2;    
  transition: transform 1s;
  transform-style: preserve-3d;
}

.test-card:hover .content {
  transform: rotateY( 180deg ) ;
  transition: transform 0.5s;
}

.front,
.back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: black;
  text-align: center;
  border-radius: 10px;
  backface-visibility: hidden;
  padding: 5px;
}

.back {
    background: black;
    transform: rotateY( 180deg );
    color: #FBCA03;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Name {
    font-family: iceland;
    font-size: 40px;
    color: #67C7EB;
    text-shadow: 0px 0px 3px #7bc9e6;
}

:is(.card-header, .cardbody) {
    width: 100%;
    height: 300px;
}

.cardbody {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.quote {
    font-size: 10px;
    padding: 4px;
    height: 190px;
    width: 100%;
}

.quote::-webkit-scrollbar {
    width: 5px;
}

.quote::-webkit-scrollbar-track {
    background: transparent;
}

.quote::-webkit-scrollbar-thumb {
    background: #67C7EB;
    border-radius: 10px;
    height: 10px;
}
.test-img{
    width: 100%;
    height: 250px;
}
img[alt='Test-photo'] {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
}
</style>