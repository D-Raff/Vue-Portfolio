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
          <a class="navbar-brand" href="#"
            ><img
              src="https://drive.google.com/uc?id=1_vrEddnSJhuf9g8Ff3OmoXg77iP5mvab"
              alt="nav-icon"
          /></a>
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
<style>
.main-nav {
    background: black;
    height: 5em;
}

.navbar-brand {
    color: white;
}

.nav-link {
    color: #67c7eb;
    text-shadow: 2px 2px 3px #7bc9e6;
}

img[alt='nav-icon'] {
    height: 70px;
    aspect-ratio: 1/1;
    filter: drop-shadow(0px 0px 1px #67c7eb);

}

.navbar-nav{
    gap: 5px;
}
</style>