<template>
  <div class="wolf">
    <div class="awnser">... loups</div>
    <img src="../../assets/wolf.jpg" ref="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'wolf',
  data() {
    return {
      datas : {
        left : "thief",
        right : "wolf",
        quest : "T'arrives en ville connard keketufe?",
        cinematic: true,
        scene: "cinematic"
      }
    }
  },
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .wolf {
    height : 100%;
    width : 100%;
    position: relative;
    background: blue
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