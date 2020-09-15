<template>
  <div class="takeGold">
    <p class="text">Tu retournes sur le lieu de ta recontre avec l'étrange personnage, il t'y attends déjà. Tu peux voir une satisfaction sur son visage lorsque tu lui donnes l'or.
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
        quest : "Tu as comme une joie immense, mais au fond de toi cet endroit et cette aventure t'as profondément marquée. Que décides tu de faire ?",
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
  .text {
    width : 70%;
    padding : 30px 30px;
  }
</style>
