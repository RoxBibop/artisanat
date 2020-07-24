<template>
  <div class="home">
    <router-link to="/play" class="play link">Jouer</router-link>
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
@import '@/assets/scss/global.scss';
.home {
  margin : 0;
  height: 100vh;
  background-color: rgb(233, 233, 233);
}
.play {
  position: absolute;
  bottom : 1%;
  right: 1%;
  z-index: 999;
  text-decoration: none;
  padding: 10px 20px;
  color : rgb(46, 46, 46);
  font-family: 'sketch';
  font-size: 55px;
}

.socialLinks
{
  // z-index: 1;
  position: absolute;
  height: 200px;
  width: 50px;
  bottom: 0;
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
    .svg-inline--fa:hover
    {
      color: red;
    }
  }
}


</style>
