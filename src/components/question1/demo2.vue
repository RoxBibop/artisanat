<template>
  <div class="demo2">
    <img src="https://picsum.photos/800/800" alt="">
  </div>
</template>

<script>
export default {
  name: 'demo2'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .demo2 {
    height : 100%;
    width : 100%;
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
