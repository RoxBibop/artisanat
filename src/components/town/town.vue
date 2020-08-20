<template>
  <div class="town"  v-on:click="emitToParent()">
    <div class="awnser">Après quelques heures de marches, vous arrivez enfin dans la ville... Une foule se rassemble au milieu d'une place... un homme s'adresse a la foule : \"Oyez Oyez la populace!! Soyez mis en garde des loups mangent nos moutons, les fermiers ont besoin de votre aide ! Il y aussi des voleurs qui nous dérobent nos biens, une prime de 500 pièces d'or sera offerte à celles et ceux qui nous débarasseront de ces fléaux !!!\"</div>
    <img src="../../assets/town.jpg" ref="img" alt="">
    <button v-on:click="emitToParent()">Continuez</button>
  </div>
</template>

<script>
export default {
  name: 'town',
  data() {
    return {
      datas : {
        left : "wolf",
        right : "thief",
        quest : "Voilà la fameuse opportunité qui s'offre a vous ! Que faites vous ? Se débarasser des ...",
        cinematic: false,
        scene: ""
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
  .town {
    height : 100vh;
    width : 100%;
    position: relative;
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
  p{
    position: absolute;
    top: 0;
  }
  img {
    height : 100%;
    width : 100%;
    object-fit: cover;
  }
  button{
    cursor: none;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
