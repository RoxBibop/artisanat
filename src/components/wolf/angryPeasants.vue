<template>
  <div class="angryPeasants">
    <p class="text">{{this.texte}}
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
      let textEffect = "Malheureusement il y a eu des témoins de votre lacheté... Les fermiers vous chassent de leur terre... vous ne vous posez pas de questions, vous décidez de partir d'ici au plus vite avant que cela ne dégénère et de retourner sur le lieu de rencontre avec le druide sans l'or.";
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
    padding : 10px 50px 30px 50px;
  }
</style>
