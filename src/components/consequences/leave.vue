<template>
  <div class="leave"  v-on:click="emitToParent()">
    <div class="awnser">Tu décides après un temps de reflexion de partir et fais part de ta décision au druide, il commence son rituel...</div>
    <img src="../../assets/leave.jpg" ref="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'leave',
  data() {
    return {
      datas : {
        left : "",
        right : "",
        quest : "",
        scene : "ritual",
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
  .leave {
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
