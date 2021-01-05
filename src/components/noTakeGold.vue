<template>
  <div class="noTakeGold">
    <p class="text">{{this.texte}}
    <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
  </div>
</template>

<script>

export default {
  name: 'noTakeGold',
  components: {
  },
  data() {
    return {
      datas: {
        left : "stay",
        right : "negociate",
        quest : "Le druide se calme après un instant de reflexion, il vous propose quelque chose: \"Je vous proposes de rester ici afin de pouvoir devenir mon disciple et de m'aider dans mes tâches, ainsi vous pourrez rentrer chez vous plus tard... Qu'en pensez-vous ?\"",
        cinematic: false,
        scene: "",
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
      let textEffect = "Vous n'avez donc pas réussi a récupérer l'or tant espéré. Vous retournez vers le lieu de la rencontre et le druide vous y attend déjà. Vous pouvez voir de la déception voire même de la colère dans son regard...";
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
  .noTakeGold {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/angryDruid.jpg");
    background-size: cover;
    background-position: (0 60%);
  }
//  .text {
//     padding : 10px 50px 30px 50px;
//   }
</style>
