<template>
  <div class="food">
    <p class="text">{{this.texte}}
    <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
  </div>
</template>

<script>
import Curseur from '../cursor';

export default {
  name: 'foodCalm',
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
      let textEffect = "\"Tu m'as l'air sympa toi! Hélàs je peux pas vraiment t'aider là. Allez, je t'offre un repas chaud et une bière, c'est tout ce que je peux faire pour toi mon ami...\"";
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
  .text {
    padding : 30px 30px;
  }
</style>
