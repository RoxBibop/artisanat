<template>
  <div class="town2">
    <div class="text">
      <p>un crieur s'adresse a la foule : <br>
        "Oyez Oyez la populace!! Soyez mis en garde des loups mangent nos moutons, les fermiers ont besoin de votre aide !<br>
        Sans parler des voleurs qui dérobent nos biens et effrayent la population !<br>
        une récompense sera offerte à celui ou celle qui nous débarassa
        de ces fléaux !"
      <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/>
      </span>
      </p>
      <Curseur/>
    </div>
  </div>
</template>

<script>
import Curseur from '../cursor';

export default {
  name: 'town2',
  components: {
    Curseur,
  },
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
  .town2 {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/town.jpg");
    background-size: cover;
  }
  
  img {
    height : 100%;
    width : 100%;
    object-fit: cover;
    transition: .3s;
  }
</style>
