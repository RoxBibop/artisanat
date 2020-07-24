<template>
  <div class="demo2">
    <div class="awnser">B</div>
    <img src="https://picsum.photos/800/800" ref="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'demo2',
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .demo2 {
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
    font-size: 70px;
    color: rgb(0, 0, 0);
    z-index: 9;
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
