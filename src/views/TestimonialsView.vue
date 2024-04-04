<template>
  <div class="test-page">
    <h1 class="heading">Testimonials</h1>
    <div class="testimonials" v-if="testimonials">
      <div class="test-card" v-for="test in testimonials" :key="test.name">
        <div class="content">
          <div class="front">
            <div class="test-img">
              <img :src="test.profile" alt="Test-photo" />
            </div>
            <div class="Name">{{ test.name }} {{ test.surname }}</div>
            <img class="turn" src="https://iili.io/JN1F2ZQ.png" alt="logo">
            <p class="large" >
              <i class="fa-solid fa-book-open"></i>
              <section class="app">hover</section>
            </p>
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
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchtestimonials");
  },
};
</script>

<style scoped>
.test-page {
  margin-top: 2em;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 10px;
}

.testimonials {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.test-card {
  border-radius: 10px;
  width: 250px;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
  color: #fbca03;
  perspective: 580px;
  margin: 10px;
}

.content {
  border: 3px solid #aa0505;
  position: absolute;
  width: 100%;
  height: 390px;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px #aa0505;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.test-card:hover .content {
  transform: rotateY(180deg);
  transition: transform 0.5s;
  animation: glow 3s infinite ease-in;
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
  transform: rotateY(180deg);
  color: #fbca03;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Name {
  font-family: iceland;
  font-size: 30px;
  color: #67c7eb;
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

.test-img {
  width: 100%;
  height: 250px;
}
img[alt="Test-photo"] {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
.heading{
  font-family: iceland, sans-serif;
  font-size: 5rem;
  font-weight: bold;
  color: #aa0505;
  text-shadow: 0px 0px 3px #7bc9e6;
}
.turn{
  height: 50px;
}
.fa-solid{
  font-size: 2rem;
  color: #aa0505;
  z-index: 1;
  position: relative;
}
.app{
  position: relative;
  bottom: 25px;
  z-index: 0;
  transition: 2s;
  animation: drop 3s;
  opacity: 0;
}
@keyframes drop {
  70%{
      bottom: 0;
      opacity: 100%;
  }
}
@keyframes glow {
    50%{
        box-shadow: 0 0 20px 5px #aa0505;
    }
}
@media (max-width: 420px) {
  .heading{
   font-size: 4rem;
  }
  .large{
    display: none;
  }
}
@media (min-width: 420px) {
  .turn{
   display: none;
  }
}
</style>
