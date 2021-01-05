<template>
  <div class="welcInn">
    <div class="text">
      <p>{{this.texte}}
      <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
    </div>
  </div>
</template>

<script>
import Curseur from '../cursor';
export default {
  name: 'welcInn',
  components: {
    Curseur,
  },
  data() {
    return {
      datas : {
        left : "",
        right : "",
        quest : "",
        scene : "welcInn2",
        cinematic: true,
      },
      x: 0,
      texte: ""
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.datas)
    },
    typeWriter() {
      let textEffect = "Vous arrivez devant un bâtiment en bois. De la lumière et du bruit émane de cet endroit. Vous regardez à travers la fenêtre et aperçevez un aubergiste qui n'a pas l'air commode, mais qui pourrait porbablement vous renseigner...";
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
  .welcInn {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/innkeeper.jpeg");
    background-size: cover;
    background-position: (0 60%);
  }
  .awnser {
    top : 50%;
    pointer-events: none;
    left : 50%;
    transform: translate(-50%, -50%);
    position : absolute;
    z-index: 9;
    padding : 10px 20px;
    font-size: 30px;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
