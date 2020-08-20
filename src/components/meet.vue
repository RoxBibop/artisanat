<template>
  <div class="meet">
    <p>Apres avoir eu vent de l'endroit ou vous vous situez, vous decidez de continuez votre route. Vous faites la rencontre d'un vieil homme... il vous demandes "Vous êtes perdus mon ami ? Ca se voit, j'ai la solution a votre problème. Donnez moi 500 pièces d'or et je pourrais vous offrir l'opportunité d'un voyage de retour. Allez en ville un peu plus loin et vous aurez sans doute une ou deux opportunités d'amasser cet or..."<br/>Après un bâtement de cils, le viel homme s'est volatilisé. Étant votre seule chance, vous décidez d'aller en ville pour gagner cet or.</p>
    <button v-on:click="emitToParent()">Continuez</button>
    <img src="../assets/meet.jpg" ref="img" alt="">
    <Curseur/>
  </div>
</template>

<script>
import Curseur from './cursor';

export default {
  name: 'meet',
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
        scene: "town"
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
  .meet {
    height : 100%;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p{
    position: absolute;
    top: 0
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
  button{
    cursor: none;
    position: absolute;
  }
</style>
