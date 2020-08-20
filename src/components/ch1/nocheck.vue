<template>
  <div class="nocheck" v-on:click="emitToParent()">
    <div class="awnser">Probablement juste un petit animal, vous ignorez le bruit et continuez votre chemin</div>
    <img src="../../assets/nocheck.jpeg" ref="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'nocheck',
  data() {
    return {
      datas : {
        left : "",
        right : "",
        quest : "",
        cinematic: true,
        scene: "meet"
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
  .nocheck {
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
    font-size: 18px;
    color: rgb(255, 255, 255);
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.616);
    padding : 20px 60px;
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