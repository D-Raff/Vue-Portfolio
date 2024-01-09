<template>
  <div class="home">
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

  }
}
</script>

<style>
.reactor-div{
  animation: fade-in 2s ease-in;
  height: 100vh;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
}
.reactor {
  animation: shrink 3s ease 3s forwards;
  
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