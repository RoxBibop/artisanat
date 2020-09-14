<template>
  <div class="badCons">
    <p class="text">Après de longue secondes d'hésitation, tu t'avoues vaincu par ta peur et laisse le loup passé et attaqué les moutons... La suite est comme un déjà vu pour les fermiers...
    <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
  </div>
</template>

<script>
import Curseur from '../cursor';

export default {
  name: 'badCons',
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
        scene: "angryPeasants"
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
  .badCons {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/sheepsDead.jpg");
    background-size: cover;
    background-position: (0 60%);
  }
  .text {
    padding : 30px 30px;
  }
</style>
