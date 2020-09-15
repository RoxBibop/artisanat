<template>
  <div class="noTakeGold">
    <p class="text">Tu n'as pas réussi a récupérer l'or tant espéré. Tu retournes vers le lieu de la rencontre et celui qui semble être un druide,<br> t'y attends déjà. Tu peux voir de la déception voire même de la colère...
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
        quest : "Le druide se calme après un instant de reflexion, il te propose quelque chose: \"Je te proposes de rester ici afin de pouvoir devenir mon disciple et de m'aider dans mes tâches, ainsi tu pourras rentrer chez toi... Qu'en penses-tu ?\"",
        cinematic: false,
        scene: ""
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
 .text {
    padding : 10px 50px 30px 50px;
  }
</style>
