<template>
  <div class="takeGold">
    <p class="text">{{this.texte}}
    <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
  </div>
</template>

<script>

export default {
  name: 'takeGold',
  components: {
  },
  data() {
    return {
      datas: {
        left : "leave",
        right : "stayGold",
        quest : "Vous avez comme une joie immense qui vous envahis, mais au fond de vous cet endroit et cette aventure vous ont profondément marqué. Que décidez vous de faire ?",
        cinematic: false,
        scene: ""
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
      let textEffect = "Vous retournez sur le lieu de votre recontre avec l'étrange personnage, il vous y attend déjà. Vous pouvez voir une satisfaction sur son visage lorsque vous lui donnez l'or.";
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
  .takeGold {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/druid.png");
    background-size: cover;
    background-position: (0 60%);
  }
  // .text {
  //   width : 70%;
  //   padding : 30px 30px;
  // }
</style>
