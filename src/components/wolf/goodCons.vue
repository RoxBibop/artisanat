<template>
  <div class="goodCons">
    <p class="text">{{this.texte}}
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
      },
      x: 0,
      texte: ""
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', this.datas);
    },
    typeWriter() {
      let textEffect = "Après un combat acharné, vous arrivez à bout de ce loup, les fermiers ont été témoins de votre bravoure... ";
      if (this.x < textEffect.length) {
        this.texte += textEffect.charAt(this.x);
        this.x++;
        setTimeout(this.typeWriter, 40);
      }
    }
  },
  mounted(){
    this.typeWriter();
  }
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
    padding : 10px 50px 30px 50px;
  }
</style>
