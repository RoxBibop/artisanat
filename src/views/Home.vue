<template>
  <div class="home">
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
      <h1>Choisir l'artisanat</h1>
      <router-link to="/intro" class="play link">Jouer</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Scene from '@/components/Scene.vue';

export default {
  name: 'Home',
  components: {
  },
  methods: {
    // cursor: function() {
    //   console.log(this.$refs.cursor.$el);
    // }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/global.scss';
.home {
  margin : 0;
  height: 100vh;
  background-color: rgb(233, 233, 233);
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 50%;
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
    z-index: 999;
    text-decoration: none;
    padding: 10px 20px;
    color : rgb(46, 46, 46);
    font-family: 'play';
    font-size: 45px;
    text-transform: uppercase;
    transition: .2s;
    animation: transformScale 1s infinite reverse ease-in;
  }
  .play:hover{
    animation-play-state: paused;
    color: rgb(165, 47, 47);
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

</style>
