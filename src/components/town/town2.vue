<template>
  <div class="town2">
    <div class="text">
      <p>{{this.texte}}
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
      let textEffect = "un crieur s'adresse a la foule : \"Oyez Oyez la populace!! Soyez mis en garde! Des loups mangent nos moutons, les fermiers ont besoin de votre aide! Sans parler des voleurs qui dérobent nos biens et effrayent la population ! Une récompense sera offerte à celui ou celle qui nous débarassera de ces fléaux !\"";
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
