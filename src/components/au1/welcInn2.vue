<template>
  <div class="welcInn">
    <div class="text">
     <p>Vous décidez de rentrer après un temps  d'hésitation... et un silence s'installe.<br> L'aubergiste vous demande si vous voulez boire quelque chose.
      <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
    </div>
    <img src="" ref="img" alt="">
    <Curseur/>
  </div>
</template>

<script>
import Curseur from '../cursor';
export default {
  name: 'welcInn',
  components: {
    Curseur,
  },
  data() {
    return {
      datas : {
        left : "calm",
        right : "panic",
        quest : " Il faut savoir ou vous vous trouvez. Comment lui demandez vous cela ? De manière ...",
        scene : "",
        cinematic: false,
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
  .welcInn {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/innkeeper.jpeg");
    background-size: cover;
    background-position: (0 60%);
  }
  .awnser {
    top : 50%;
    pointer-events: none;
    left : 50%;
    transform: translate(-50%, -50%);
    position : absolute;
    z-index: 9;
    padding : 10px 20px;
    font-size: 30px;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.5);
  }
  img {
    width: 100%;
    height : 100%;
    object-fit: cover;
  }
  button{
    position: absolute;
    bottom: 5px;
    left: 50%;
  }
</style>
