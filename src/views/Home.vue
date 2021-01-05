<template>
  <div class="home">
    <div class="set">
      <div><img src="../assets/leaves/l1.png" alt=""></div>
      <div><img src="../assets/leaves/l2.png" alt=""></div>
      <div><img src="../assets/leaves/l4.png" alt=""></div>
      <div><img src="../assets/leaves/l3.png" alt=""></div>
      <div><img src="../assets/leaves/l1.png" alt=""></div>
      <div><img src="../assets/leaves/l2.png" alt=""></div>
      <div><img src="../assets/leaves/l4.png" alt=""></div>
      <div><img src="../assets/leaves/l3.png" alt=""></div>
    </div>
    <div class="set set2">
      <div><img src="../assets/leaves/l1.png" alt=""></div>
      <div><img src="../assets/leaves/l2.png" alt=""></div>
      <div><img src="../assets/leaves/l4.png" alt=""></div>
      <div><img src="../assets/leaves/l3.png" alt=""></div>
      <div><img src="../assets/leaves/l1.png" alt=""></div>
      <div><img src="../assets/leaves/l2.png" alt=""></div>
      <div><img src="../assets/leaves/l4.png" alt=""></div>
      <div><img src="../assets/leaves/l3.png" alt=""></div>
    </div>
    <!-- <div class="set set3">
      <div><img src="../assets/leaves/l1.png" alt=""></div>
      <div><img src="../assets/leaves/l2.png" alt=""></div>
      <div><img src="../assets/leaves/l4.png" alt=""></div>
      <div><img src="../assets/leaves/l3.png" alt=""></div>
      <div><img src="../assets/leaves/l1.png" alt=""></div>
      <div><img src="../assets/leaves/l2.png" alt=""></div>
      <div><img src="../assets/leaves/l4.png" alt=""></div>
      <div><img src="../assets/leaves/l3.png" alt=""></div>
    </div> -->
    <div class="socialLinks">
      <div class="line">
        <div></div>
      </div>
      <div class="icons">
      <fa-icon :icon="['fab','twitter']" class="link"/>
      <fa-icon :icon="['fab','youtube']" class="link"/>
      <fa-icon :icon="['fab','instagram']" class="link"/>
      <fa-icon :icon="['fab','facebook']" class="link"/>
      </div>
    </div>
    <div class="title">
      <router-link to="/intro" class="play link">Commencer</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/global.scss';
.home {
  margin : 0;
  height: 100vh;
  background-image: url('./../assets/hompage2.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.set {
  position: absolute;
  width: 100%;
  height: 100%;
  top : 0;
  left : 0;
}

.set div {
  position : absolute;
  display: block;
}

.set div:nth-child(1) {
  left: 20%;
  animation : animateLeaves 15s linear infinite;
  animation-delay: -7s;
}
.set div:nth-child(2) {
  left: 78%;
  animation : animateLeaves 20s linear infinite;
  animation-delay: -5s;
}
.set div:nth-child(3) {
  left: 70%;
  animation : animateLeaves 25s linear infinite;
}
.set div:nth-child(4) {
  left: 10%;
  animation : animateLeaves 15s linear infinite;
  animation-delay: -5s;
}
.set div:nth-child(5) {
  left: 94%;
  animation : animateLeaves 18s linear infinite;
  animation-delay: -10s;
}
.set div:nth-child(6) {
  left: 0%;
  animation : animateLeaves 14s linear infinite;
}
.set div:nth-child(7) {
  left: 15%;
  animation : animateLeaves 21s linear infinite;
}
.set div:nth-child(8) {
  left: 67%;
  animation : animateLeaves 15s linear infinite;
}

.set2 {
  transform: scale(2) rotateY(180deg);
  filter: blur(2px);
}

.set3 {
  transform: scale(0.8) rotateX(180deg);
  filter: blur(2px);
}
.socialLinks
{
  // z-index: 1;
  position: absolute;
  height: 200px;
  width: 50px;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column-reverse;
  .line
  {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    div
    {
      position: relative;
      width: 1px;
      height: 100%;
      background: rgb(46, 46, 46);
    }
  }
  .icons
  {
    // z-index: 1;
    position: absolute;
    width: 100%;
    height: 50%;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .svg-inline--fa{
      // z-index: 1;
      padding: 5px;
      border-radius: 50%;
      color : rgb(46, 46, 46);
      margin: 5px 0px ;
      background: rgb(233, 233, 233);
    }
  }
}

.title{
  margin-top: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  h1{
    font-family: "cyber";
    font-size: 6rem;
    color : rgb(46, 46, 46);
    font-weight: 100;
  }
  .play{
    text-shadow: 1px 1px 2px rgb(161, 73, 1), 0 0 1em rgb(0, 0, 17), 0 0 0.1em rgb(13, 13, 14);
    z-index: 999;
    text-decoration: none;
    padding: 10px 20px;
    color : rgb(153, 57, 2);
    font-family: 'play';
    font-size: 45px;
    text-transform: uppercase;
    letter-spacing: .2rem;
    transition: .2s;
    animation: transformScale 1s infinite reverse ease-in;
  }
  .play:hover{
    animation-play-state: paused;
    color: rgb(255, 196, 0);
    font-size: 45px;
  }
}
@keyframes transformScale {
  0%{
    font-size: 45px;
  }
  50%{
    font-size: 55px;
  }
  100%{
    font-size: 45px;
  }
} 

@keyframes animateLeaves {
  0% {
    opacity : 0;
    top: -10%;
    transform:  translateX2(0px) rotate(0deg);
  }
  10% {
    opacity: 1;
  }
  20% {
    transform:  translateX(-20px) rotate(45deg);
  }
  40% {
    transform:  translateX(-20px) rotate(90deg);
  }
  60% {
    transform:  translateX(20px) rotate(135deg);
  }
  80% {
    transform:  translateX(-20px) rotate(180deg);
  }
  100% {
    top: 110%;
  }
}

</style>
