<template>
  <div class="about">
    <div class="main-div container">
      <h1 class="head">ABOUT ME</h1>
      <div class="expander">ma se poes
        <div class="circle">
          <div class="outer"></div>
          <div class="middle"></div>
          <div class="inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {

}


</script>


<style>
.about {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-div {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 4em;
  justify-content: center;
  align-items: center;
}

.head {
  font-family: iceland;
  font-size: 90px;
  color: #67C7EB;
  text-shadow: 0px 0px 3px #7bc9e6;
}

.expander {
  border: blue 3px solid;
  height: 100%;
  width: 100%;
}

.circle {
  border: blue 3px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.outer {
  position: absolute;
  border-radius: 50%;
  height: 300px;
  aspect-ratio: 1/1;
  border: 20px solid rgba(0, 0, 0, 0);
  border-bottom: 20px solid #0088ff;
  border-left: 20px solid #0088ff;
}

.inner {
  position: absolute;
  border-radius: 50%;
  width: 8%;
  aspect-ratio: 1/1;
  border: 26px solid #0088ff;
  border-top: 26px solid #00000000;
  border-bottom: 26px solid #00000000;
  animation: spin 1s linear infinite reverse;
}
</style>