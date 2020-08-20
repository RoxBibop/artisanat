<template>
  <div class="auberge"  v-on:click="emitToParent()">
    <div class="awnser">Je vais à l'auberge</div>
    <img src="../../assets/inn.png" ref="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'auberge',
  data() {
    return {
      datas : {
        left : "",
        right : "",
        quest : "",
        scene : "welcInn",
        cinematic: true,
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
  .auberge {
    height : 100%;
    width : 100%;
    position: relative;
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
    height : 100%;
    width : 100%;
    object-fit: cover;
    transition: .3s;
  }

  img:hover{
    transform: scale(1.2)
  }
</style>
