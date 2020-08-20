<template>
  <div class="welcInn">
    <button v-on:click="emitToParent()">Suivant</button>
    <p>Vous arrivez devant un bâtiment en bois et pierres. De la lumière et du bruit émane de cet endroit. Vous regardez à travers la fenêtre...</p>
    <img src="../../assets/innInside.jpg" ref="img" alt="">
    <Curseur/>
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
        left : "calm",
        right : "panic",
        quest : "... vous décidez de rentrer après un temps d'hésitation... et un silence s'installe. Tout le monde vous fixe du regard d'un air surpris et choqué. L'aubergiste vous demande si vous voulez à boire et à manger. Il faut savoir ou vous vous trouvez. Comment lui demandez vous cela ? De manière ...",
        scene : "",
        cinematic: false,
      }
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.datas)
    }
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .welcInn {
    height : 100vh;
    width : 100%;
    position: relative;
  }
  p{
    position: absolute;
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
  img {
    width: 100%;
    height : 100%;
    object-fit: cover;
  }
  button{
    position: absolute;
    bottom: 5px;
    left: 50%;
  }
</style>
