<template>
  <div class="goodCons">
    <p class="text">Après un combat acharné, vous arrivez a bout de ce loup, les fermiers ont été témoins de votre bravoure... 
    <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
  </div>
</template>

<script>
import Curseur from '../cursor';

export default {
  name: 'goodCons',
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
        scene: "congrats"
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
  .goodCons {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/deadWolf.jpg");
    background-size: cover;
    background-position: (0 60%);
  }
  .text {
    padding : 30px 30px;
  }
</style>
