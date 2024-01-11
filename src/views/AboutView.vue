<template>
  <div class="about">
    <div class="main-div container">
      <h1 class="head">ABOUT ME</h1>
      <div class="expander">
        <div class="circle">
          <div class="outer"></div>
          <div class="middle"></div>
          <div class="inner"></div>
        </div>
        <div class="about-info">
          <img src="https://i.ibb.co/6DwxjHh/1000025632.jpg" alt="about-img">
          <div class="information">
            <p class="text">
              I am a dedicated, hard-working individual who is always in pursuit of knowledge to further my skills and
              abilities and therefore communicate well with others and keep an open mind, constantly creating
              opportunities
              to learn from others
            </p>
            <p class="text">
              Coding quickly became a passion for me and is the career path I have dedicated my life to, with the
              determination to go as far as I possibly can in the Information and communication technology sector
            </p>
            <p class="hobbies">
              <span class="H-I">Hobbies and Interests</span>
              <span>Drawing & Design</span>
              <span>Car Enthusiast</span>
              <span>Fitness</span>
              <span>Gaming</span>
              <span>Coding</span>
              <span>Hiking</span>
            </p>
          </div>
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
  position: relative;
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: absolute;
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  animation: load 2.5s ease-in 1 forwards;
  opacity: 100% !important;
}

.outer {
  position: absolute;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  border: 20px solid rgba(0, 0, 0, 0);
  border-bottom: 20px solid #0088ff;
  border-left: 20px solid #0088ff;
  animation: expand 1s ease-in 1 2.5s forwards;
}

.middle {
  position: absolute;
  border-radius: 50%;
  width: 11%;
  aspect-ratio: 1/1;
  border: 10px solid #0088ff;
  border-bottom: 5px solid #00000000;
  animation: load 2.5s linear 1 forwards;
}

.inner {
  position: absolute;
  border-radius: 50%;
  width: 5%;
  aspect-ratio: 1/1;
  border: 26px solid #0088ff;
  border-top: 26px solid #00000000;
  border-bottom: 26px solid #00000000;
  animation: load 2s ease-in 1 forwards;
}

.about-info {
  display: flex;
  opacity: 0%;
  padding: 19px;
  animation: display 1s ease-in 3.5s 1 forwards;
  color: #FBCA03;
}

.hobbies {
  display: flex;
  flex-direction: column;
}

.H-I {
  font-family: iceland;
  font-size: 40px;
  color: #67C7EB;
  text-shadow: 0px 0px 3px #7bc9e6;
}

.information{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes load {
  0% {
    rotate: 0deg;
  }

  80% {
    rotate: 360deg;
    opacity: 100%;
  }

  100% {
    display: none;
  }

}

@keyframes expand {
  from {
    height: 300px;
  }

  to {
    border-radius: 0%;
    border: 20px solid #0088ff;
    width: 100%;
    height: 100%;
  }
}

@keyframes display {
  to{
    opacity: 100%;
  }
}
</style>