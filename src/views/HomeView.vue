<template>
  <div class="home">
    <div class="info" >
      <p class="lead" v-for="work in jobTitle" :key="work.title">
        {{ work.title }}
      </p>
    </div>
    <div class="reactor-div">
      <ArcReactor class="reactor"/>
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
    jobTitle(){
      return this.$store.state.jobTitle
    }
  },
  mounted(){
    // when this is placed on the dom
    this.$store.dispatch('fetchjobTitle')
  }
}
</script>

<style>
.home{
  display: flex;
  justify-content: center;
}
.reactor-div{
  animation: fade-in 2s ease-in;
  height: 700px;
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
.info{
  border: 3px solid blue;
  height: 100px;
  width: 200px;
  position: relative;
}
.lead{
  color: aliceblue;
  position: relative;
  z-index: 1;
}

@keyframes fade-in {
  from {
    opacity: 50%;
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
    height: 80%;
    bottom: 3%;
    left: 10%;
  }
}
</style>
