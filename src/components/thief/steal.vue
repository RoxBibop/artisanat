<template>
  <div class="steal" v-on:click="emitToParent()">
    <div class="awnser">Vous décidez de ne pas les suivre, et tentez de dérober l'un des sacs avant de partir.</div>
    <img src="../../assets/steal.jpg" ref="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'steal',
  data() {
    return {
      datas : {
        left : "",
        right : "",
        quest : "",
        cinematic: true,
        scene: "badConsThief"
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
  .steal {
    height : 100%;
    width : 100%;
    position: relative;
    background: rgb(10, 10, 10)(17, 17, 17);
  }
  .awnser {
    top : 50%;
    pointer-events: none;
    left : 50%;
    transform: translate(-50%, -50%);
    position : absolute;
    z-index: 9;
    padding : 10px 20px;
    font-size: 24px;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.5);
  }
  img {
    height : 100%;
    width : 100%;
    object-fit: cover;
    transition: .3s;
  }

  img:hover{
    transform: scale(1.2)
  }
</style>