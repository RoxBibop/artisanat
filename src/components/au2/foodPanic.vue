<template>
  <div class="food">
    <div class="text">
      <p>"Hey calme toi mon gars! Déstresse !
      T'as pas l'air du coin toi ! <br>
      Prends un peu d'pain et une chope de bière ca te calmera...!
      <br>C'est tout ce que je peux faire pour toi mon ami..." 
      <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
    </div>
  </div>
</template>

<script>
import Curseur from '../cursor';

export default {
  name: 'foodPanic',
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
        scene: "meet"
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
  .food {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/innkeeper.jpeg");
    background-size: cover;
    background-position: (0 60%);
  }
</style>
