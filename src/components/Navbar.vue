<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg main-nav navbar-dark">
      <div class="container-fluid nav-body">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse nav-list"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <slot name = "HomeBtn"></slot>
            </li>
            <li class="nav-item">
                <slot name = "AboutBtn"></slot>
            </li>
            <li class="nav-item">
                <slot name = "ResumeBtn"></slot>
            </li>
            <li class="nav-item">
                <slot name = "ProjectsBtn"></slot>
            </li>
            <li class="nav-item">
                <slot name = "TestimonialsBtn"></slot>
            </li>
            <li class="nav-item">
                <slot name = "ContactBtn"></slot>
            </li>
          </ul>
          <router-link to="/" class="navbar-brand"><img
              src="https://i.ibb.co/9V3qpSH/klipartz-com.png"
              alt="nav-icon"
          /></router-link>
        </div>
      </div>
    </nav>
    </div>
</template>
<script>
export default {
    name: 'NavBarComp'

}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Iceland&family=Lexend+Zetta:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display&display=swap");

.main-nav {
    background: transparent;
    height: 5em;
}

img[alt='nav-icon'] {
    height: 70px;
    aspect-ratio: 1/1;
    filter: drop-shadow(0px 0px 1px #67c7eb);

}

nav li :hover{
  text-shadow: 0px 0px 3px #7bc9e6;
}
.nav-list{
    gap: 5px;
}
.navbar-nav{
    gap: 5px;
}

</style>