<template>
  <div class="isChecking">
    <div class="text">
      <p>{{this.texte}}
      <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
    </div>
    <Curseur/>
  </div>
</template>

<script>
import Curseur from '../cursor';

export default {
  name: 'isChecking',
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
      },
      x: 0,
      texte: ""
    }
  },
  methods: {
    emitToParent() {
      console.log("moncul");
      this.$emit('childToParent', this.datas);
    },
    typeWriter() {
      let textEffect = "Vous vous approchez du buisson et fouillez afin de trouver la source du bruit. En vain. Certainement votre imagination, ou un petit animal. Rien d'alarmant... Vous reprenez la route";
      if (this.x < textEffect.length) {
        this.texte += textEffect.charAt(this.x);
        this.x++;
        setTimeout(this.typeWriter, 40);
        if (this.x == textEffect.length - 1) {
          console.log(this.x);
        }
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
  .isChecking {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/check.jpeg");
  }
  img {
    height : 100%;
    width : 100%;
    object-fit: cover;
    transition: .3s;
  }

</style>
