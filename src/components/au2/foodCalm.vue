<template>
  <div class="food">
    <p>"Tu m'as l'air sympa toi! J'aime bien ta tronche de fion! Prends un peu d'pain et une chope de bière ca t'remontera l'moral... Ici on est a PenisLand, l'endroit ou tu trouvera le plus de chibres sur terre. Incroyable du gland! Anusator a pris le pouvoir sur Peniseval mais on l'a plus revue depuis. Par contre prends ce penis en bois et des vetements tu attires trop l'attention la!"</p>
    <span v-on:click="emitToParent()">Continuez</span>
    <img src="../../assets/food.jpg" ref="img" alt="">
    <Curseur/>
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
  .food {
    height : 100%;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p{
    position: absolute;
    top: 0;
  }
  .awnser {
    pointer-events: none;
    position : absolute;
    font-size: 30px;
    z-index: 9;
    padding : 10px 20px;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.5);
  }
  img {
    height : 100%;
    width : 100%;
    object-fit: cover;
    transition: .3s;
  }
  span{
    cursor: none;
    position: absolute;
  }
</style>
