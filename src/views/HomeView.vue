<template>
  <div class="home">
    <img src="https://iili.io/JhDRlWB.png" alt="profilePhoto">
    <div class="info">
      <p class="Name">I Am Damon Raffels</p>
      <p v-if="jobTitle" class="titles">Aspiring <span class="lead" v-for="work in jobTitle" :key="work.title">
          {{ work.title }}
        </span></p>

    </div>
    <div class="reactor-div">
      <ArcReactor class="reactor" />
    </div>
  </div>
</template>

<script>
import ArcReactor from '@/components/ArcReactor.vue';


export default {
  name: 'HomeView',
  components: {
    ArcReactor

  },
  computed: {
    // computed is for data that will change
    jobTitle() {
      return this.$store.state.jobTitle
    }
  },
  mounted() {
    // when this is placed on the dom
    this.$store.dispatch('fetchjobTitle')
  }
}
</script>

<style >
.home {
  display: flex;
  justify-content: center;
  background: black;
  min-height: 100%;
  width: 100vw;
}

.reactor-div {
  animation: fade-in 2s ease-in;
  height: 600px;
  width: 100%;
  width: fit-content;
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
}

.reactor {
  animation: shrink 3s ease 3s forwards;
  height: 100%;
}

.info {
  height: 100px;
  width: 40%;
  position: relative;
  color: white;
  font-family: 'Iceland', sans-serif;
  top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  visibility: hidden;
  animation: fade 2s ease-in 5s 1 forwards;
}

.Name {
  font-size: 50px;
  margin: 0;
}

.titles {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.lead {
  color: aliceblue;
  position: relative;
  z-index: 1;
  color: #AA0505;
}

img[alt='profilePhoto'] {
  height: 500px;
  position: absolute;
  left: 10%;
  top: 20%;
  visibility: hidden;
  animation: fade 2s ease-in 6s 1 forwards;
}

@keyframes fade-in {
  from {
    opacity: 50%;
  }
}

@keyframes fade {
  from {
    opacity: 0%;
  }

  to {
    visibility: visible;
  }
}

@keyframes shrink {
  from {
    transform: translateX(0px);
    height: 100%;
    bottom: 0;
    left: 0;
  }

  to {
    transform: translateX(100px);
    height: 65%;
    aspect-ratio: 1/1;
    left: 15%;
  }
}

@media screen and (max-width:670px) {
  .reactor-div {
    width: 100%;
  }
  .home{
    height: 800px;
  }
  .info{
    top: 500px;
    left: 100px;
  }

  .reactor {
    height: 50%;
    bottom: 20px;
  }

  img[alt='profilePhoto'] {
    width: 300px;
    height: 400px;
    object-fit: cover;
    position: absolute;
    visibility: hidden;
    animation: fade 2s ease-in 6s 1 forwards;
    top: 350px;
  }

  @keyframes shrink {
    from {
      transform: translateX(0px);
      bottom: 0;
      left: 0;
    }
    
    to {
      transform: translateX(0px);
      bottom: 0;
      left: 0;
      aspect-ratio: 1/1;
    }
  }
}
</style>
