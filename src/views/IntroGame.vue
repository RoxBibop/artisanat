<template>
  <div class="intro">
    <Curseur ref="cursor"/>
    <p class="text">
      Sans trop savoir comment vous en êtes arrivés là, vous vous reveillez au coeur d'une forêt dans une époque qui semble différente de la votre et vêtu étrangement.<br>
      Vous allez tout tenter pour rentrer chez vous, à votre époque. <br>
      Mais la première chose à faire, c'est probablement de sortir de cette forêt...
      <span class="arrowBtn" v-on:click="emitToParent()">    <router-link to="/play" class="play link"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></router-link></span></p>
    <img src="../assets/intro.jpg" ref="img" alt="">

  </div>
</template>

<script>
  import Curseur from '@/components/cursor.vue';
  export default {
    name: 'introGame',
    components: {
      Curseur,
    },
  }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.intro{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .play{
    position: absolute;  
    transform: translateX(-50%);
    bottom: 5px;
    left: 50%;
    color: rgb(255, 255, 255);
    text-decoration: none;
  }

  .text {
    width : 70%;
    padding : 40px 60px;
  }

  .arrowBtn {
    bottom : 0;
    right : 50px;
  }
}
</style>