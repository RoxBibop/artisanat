<template>
  <div class="congrats">
    <p class="text">... ils te félicitent pour ta bravoure, soignent tes plaies et te nourrissent. Tu pars chercher<br> ton or afin de retourner sur le lieu de la rencontre avec le mystérieux personnage.
    <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
  </div>
</template>

<script>
import Curseur from '../cursor';

export default {
  name: 'congrats',
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
        scene: "takeGold"
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
  .congrats {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/congrats.jpg");
    background-size: cover;
    background-position: (0 60%);
  }
  .text {
    padding : 10px 50px 30px 50px;
  }
</style>
