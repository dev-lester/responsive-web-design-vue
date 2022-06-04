<template>
  <main>
    <section class="presentation">
      <div class="introduction">
        <div class="intro-text">
          <h1>Laptop for the future</h1>
          <p>The new 14 inch bezeless display offerring a 4k display with touch screen.</p>
        </div>
        <div class="cta">
          <button class="cta-select">14 Inch</button>
          <button class="cta-add">Add To Cart</button>
        </div>
      </div>
      <div class="cover">
        <img src="../assets/img/matebook.png" alt="matebook">
      </div>
    </section>
    <LaptopSelectComponent/>
    <img class="big-circle" src="../assets/img/big-eclipse.svg" alt="">
    <img class="medium-cirle" src="../assets/img/mid-eclipse.svg" alt="">
    <img class="small-circle" src="../assets/img/small-eclipse.svg" alt="">
  </main>
</template>

<script>
import LaptopSelectComponent from '@/components/LaptopSelectComponent'
export default {
  name: "HomeView",
  components: { LaptopSelectComponent }
}
</script>
<style scoped>

.presentation {
  display: flex;
  width: 90%;
  margin: auto;
  min-height: 80vh;
  align-items: center;
}
.introduction {
  flex: 1;
}
.intro-text h1 {
  font-size: 44px;
  font-weight: 500;
  background: linear-gradient(to right, #494964, #6f6f89);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.intro-text p {
  margin-top: 5px;
  font-size: 22px;
  color: #585772;
}
.cta {
  padding: 50px 0px, 0px, 0px;
}
.cta-select {
  border: 2px solid #c36cbb;
  background: transparent;
  color: #c36cbb;
  width: 150px;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
}
.cta-add {
  background: #c36cbb;
  width: 150px;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
  border: none;
  color: white;
  margin: 30px 0px 0px 15px;
  filter: drop-shadow(0px 4px 2px #585772);
}
.cover {
  flex: 1;
	display: flex;
	justify-content: center;
	height: 60vh;
}
.cover img {
  height: 100%;
  filter: drop-shadow(0px 5px 3px black);
  animation: drop 1.5s ease;
}
.big-circle {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: -1;
  opacity: 0.5;
  height: 80%;
}
.medium-cirle {
  position: absolute;
  top: 30%;
  right: 30%;
  z-index: -1;
  opacity: 0.4;
  height: 60%;
}
.small-circle {
  position: absolute;
  bottom: 0%;
  left: 20%;
  z-index: -1;
}
@keyframes drop {
  0%{
    opacity: 0;
    transform: translateY(-80px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}
@media screen and (max-width: 1024px) {
  .presentation {
    flex-direction: column;
  }
  .introduction {
    margin-top: 5vh;
    text-align: center;
  }
  .intro-text h1 {
    font-size: 30px;
  }
  .intro-text p {
    font-size: 18px;
  }
  .cta {
    padding: 10px 0px 0px 0px;
  }
  .laptop-select {
    bottom: 5%;
    right: 50%;
    width: 50%;
    transform: translate(50%, 5%);
  }
  .cover img {
    height: 400px;
  }
  .small-circle,
	.medium-circle,
	.big-circle {
		opacity: 0.2;
	}
}

</style>>
  