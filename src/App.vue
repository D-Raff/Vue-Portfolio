<template>
  <Navbar>
    <template #HomeBtn>
      <router-link to="/">Home</router-link> |
    </template>
    <template #AboutBtn>
      <router-link to="/about">About</router-link> |
    </template>
    <template #ResumeBtn>
      <router-link to="/resume">Resume</router-link> |
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
  <main>
    <router-view/>
  </main>


</template>

<script>
import Navbar from './components/Navbar.vue';

export default{
name: 'App',
components: {
  Navbar

}

}


</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  width: 100vw;
  background: black;
}

nav {
  padding: 30px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #67c7eb;
  text-shadow: 1px 1px 3px #7bc9e6;
}

nav a.router-link-exact-active {
  color: #AA0505;
  text-shadow: 1px 1px 3px #7bc9e6;
}
</style>
