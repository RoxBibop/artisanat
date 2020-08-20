<template>
  <div class="intro">
    <Curseur ref="cursor"/>
    <p>Binvenue chevalier Peniseval, allez à la conquête de votre royaume PenisLand.</p>
    <img src="../assets/intro.jpg" ref="img" alt="">
    <router-link to="/play" class="play link">Commencez</router-link>
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
  p{
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5px;
    background: rgba(0,0,0,.4);
  }
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
    color: red;
    background: black;
    text-decoration: none;
  }
}
</style>