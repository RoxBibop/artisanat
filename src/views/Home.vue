<template>
  <div class="home">
    <router-link to="/play">Jouer</router-link>
    <Scene/>
  </div>
</template>

<script>
// @ is an alias to /src


import Scene from '@/components/Scene.vue';

export default {
  name: 'Home',
  components: {
    Scene
  }, 
}
</script>

<style scoped lang="scss">
.home {
  margin : 0;
  height: 100vh;
  background-color: wheat;
}
a {
  position: absolute;
  top : 0;
  left : 0;
  z-index: 999;
  text-decoration: none;
  padding: 10px 20px;
  background-color: rgb(167, 167, 167);
  color : rgb(255, 255, 255);
}

</style>
