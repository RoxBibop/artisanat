<template>
  <div class="angryPeasants">
    <p class="text">Malheureusement il y a eu des témoins de ta lacheté... Les fermiers te regardent d'un regard sombre et effrayant... tu ne te poses plus de questions, tu décides de partir d'ici et de repartir en ville.
    <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
  </div>
</template>

<script>
import Curseur from '../cursor';

export default {
  name: 'angryPeasants',
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
  .angryPeasants {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/angryPeasants.jpg");
    background-size: cover;
    background-position: (0 60%);
  }
  .text {
    padding : 30px 30px;
  }
</style>
