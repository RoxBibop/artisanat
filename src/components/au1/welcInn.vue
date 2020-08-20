<template>
  <div class="welcInn">
    <div class="text">
     <p>Vous arrivez devant un bâtiment en bois et pierres.
        De la lumière et du bruit émane de cet endroit.<br> Vous regardez à travers la fenêtre et aperçevez un aubergiste qui à l'ai peu commode,<br> mais qui pourrait porbablement vous renseigner...
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
