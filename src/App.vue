<template>
  <Navbar class="Nav">
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

  <Footer class="footer"/>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default{
  name: 'App',
  components: {
    Navbar,
    Footer

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
  height: 100%;
  width: 100vw;
  background: black;
  overflow: hidden;
}
main{
  height: 100vh;
}
Nav {
  font-family: 'Iceland', sans-serif;
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

body::-webkit-scrollbar{
  display: none;
}

</style>
