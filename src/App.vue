<template>
  <Navbar class="Nav">
    <template #HomeBtn>
      <router-link to="/">Home</router-link> |
    </template>
    <template #AboutBtn>
      <router-link to="/about">About</router-link> |
    </template>
    <template #ResumeBtn>
      <router-link to="/resume">Education and Work</router-link> |
    </template>
    <template #ProjectsBtn>
      <router-link to="/projects">Projects</router-link> |
    </template>
    <template #TestimonialsBtn>
      <router-link to="/testimonials">Testimonials</router-link> |
    </template>
    <template #ContactBtn>
      <router-link to="/contact">Contact Me</router-link>
    </template>
  </Navbar>

  <router-view />

  <Footer class="footer" />
</template>

<script>

import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer

  }

}


</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Marvel:ital,wght@0,400;0,700;1,400;1,700&family=Play:wght@400;700&display=swap');

#app {
  font-family: marvel, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 110vh;
  width: 100vw;
  box-sizing: border-box;
  background: black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
}

.Nav {
  font-family: 'Iceland', sans-serif;
  position: absolute;
  right: 0;
  z-index: 1;
  animation: fade 1s ease-in 6s 1 forwards;
  visibility: hidden;
}

Nav a {
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
  color: #67c7eb;
}

Nav a.router-link-exact-active {
  color: #AA0505;
  text-shadow: 0px 0px 3px #7bc9e6;
}

body::-webkit-scrollbar {
  display: none;
}

.footer {
  animation: fade 1s ease-in 6s 1 forwards;
  background: black;
  z-index: 1;
}

@keyframes fade {
  from {
    opacity: 0%;
    visibility: hidden;
  }

  to {
    visibility: visible;
  }
}
</style>
