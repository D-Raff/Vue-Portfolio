<template>
  <div class="about">
    <div class="main-div container">
      <div class="expander">
        <div class="circle">
          <div class="outer"></div>
          <div class="middle"></div>
          <div class="inner"></div>
        </div>
        <div class="about-info">
          <img src="https://i.ibb.co/6DwxjHh/1000025632.jpg" alt="about-img">
          <div class="information">
            <h1 class="head">ABOUT ME</h1>
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
            <div class="title">
              <p class="hobbies">
                <span class="H-I">Hobbies and Interests</span>
                <span>Drawing & Design</span>
                <span>Car Enthusiast</span>
                <span>Fitness</span>
                <span>Gaming</span>
                <span>Coding</span>
                <span>Hiking</span>
              </p>
              <p class="contact">
                <span><span class="Key">Based in:</span> Rylands, Cape Town</span>
                <span><span class="Key">D.O.B:</span> 07/02/1998</span>
                <span><span class="Key">Languages:</span> English, Afrikaans</span>
                <span class="links"><span class="Key">Socials:</span>
                <a href="https://www.instagram.com/damon.raffels/"><i class="fa-brands fa-square-instagram"></i></a>
                <a href="https://www.facebook.com/damon.raffel"><i class="fa-brands fa-square-facebook"></i></a>
              </span>
              </p>
            </div>
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


<style scoped>
.about {
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.main-div {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  padding-top: 4em;
  justify-content: center;
  align-items: center;
}

.head {
  font-family: iceland;
  font-size: 90px;
  color: #FBCA03;
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
  box-sizing: border-box;
}

.about-info {
  display: flex;
  opacity: 0%;
  padding: 20.2px;
  animation: display 1s ease-in 3.5s 1 forwards;
  color: #FBCA03;
}

.hobbies {
  color: #67C7EB;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: left;
  width: 50%;
}

.H-I {
  color: #FBCA03;
  font-family: iceland;
  font-size: 40px;
  line-height: 25px;
}
.text{
  color: #0088ff;
  text-align: left;
  font-weight: 700;
  font-size: 1.2rem;
}

.information{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items:start;
  padding: 10px;
}

.title{
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  text-shadow: none;
}

.contact{
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  text-align: left;
}
.contact span{
  color: #0088ff;
}
.Key{
  color: #FBCA03 !important;
}
.fa-brands{
  font-size: 30px;
  color: #FBCA03;
  text-shadow: 0px 0px 5px #67C7EB;
}
.links{
  display: flex;
  justify-content: left;
  gap: 10px;
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
    border: 20px solid rgba(0, 136, 255, 40%);
    box-shadow: 0px 0px 10px 8px rgba(0, 136, 255, 40%);
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