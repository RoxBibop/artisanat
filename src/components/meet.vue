<template>
  <div class="meet">
    <div class="text">
      <p>{{this.texte}}
      <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
    </div>
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
        scene: "meet2"
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
      let textEffect = "Vous continuez donc votre route, lorsqu'un étrange personnage semble vous appeller. Il vous explique qu'il sait ce qu'il vous arrive et qu'il peut vous aider à vous renvoyer à votre époque, mais ce ne sera pas gratuit. En échange de 500 pièces d'or il vous apportera son aide.";
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
  .meet {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/druid.png");
    background-size: cover;
  }
  
  img {
    height : 100%;
    width : 100%;
    object-fit: cover;
    transition: .3s;
  }

</style>
