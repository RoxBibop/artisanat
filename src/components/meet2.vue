<template>
  <div class="meet2">
    <div class="text">
      <p>Dans l'absence d'une meilleure solution, vous décidez de lui faire confiance.<br> Il vous suggère d'aller en ville et vous montre le chemin...
      <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
    </div>
    <Curseur/>
  </div>
</template>

<script>
import Curseur from './cursor';

export default {
  name: 'meet2',
  components: {
    Curseur,
  },
  data() {
    return {
      datas: {
        left : "",
        right : "",
        quest : "",
        cinematic: true,
        scene: "town"
      }
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', this.datas);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .meet2 {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/druid.png");
    background-size: cover;
  }
  
  img {
    height : 100%;
    width : 100%;
    object-fit: cover;
    transition: .3s;
  }

</style>
