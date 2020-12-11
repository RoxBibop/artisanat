<template>
  <div class="goodConsThief">
    <p class="text">{{this.texte}}
    <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
  </div>
</template>

<script>
import Curseur from '../cursor';

export default {
  name: 'goodConsThief',
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
        scene: "noTakeGold"
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
      let textEffect = "Hélàs ils vous prennent la main dans le sac! Vous décidez donc de fuir sans la moindre pièce d'or, rester dans le coin serait trop dangereux.";
      if (this.x < textEffect.length) {
        this.texte += textEffect.charAt(this.x);
        this.x++;
        setTimeout(this.typeWriter, 40);
        if (this.x == textEffect.length - 1) {
          console.log(this.x);
        }
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
  .goodConsThief {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/caught.jpg");
    background-size: cover;
    background-position: (0 60%);
  }
  // .text {
  //   width : 70%;
  //   padding : 20px 0px 30px 30px;
  // }
</style>
