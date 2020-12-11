<template>
  <div class="calm" v-on:click="emitToParent()">
    <div class="awnser" v-if="displayText">calme</div>
    <img src="../../assets/calm.jpg" ref="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'calm',
  data() {
    return {
      datas : {
        left : "",
        right : "",
        quest : "",
        cinematic: true,
        scene: "foodCalm"
      },
      displayText: false,
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.datas)
      this.$store.commit("increment", "E");
      this.$store.commit("increment", "R");
      this.$store.commit("increment", "S");
      this.$store.commit("increment", "I");
    }
  },
  mounted: function() {
    let time = 3500
    setTimeout(() => {
      this.displayText = true;
    }, time);
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .calm {
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