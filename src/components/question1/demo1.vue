<template>
  <div class="demo1" v-on:click="emitToParent()">
    <div class="awnser">A</div>
    <img src="https://picsum.photos/800" alt="">
  </div>
</template>

<script>
export default {
  name: 'demo1',
  data() {
    return {
      datas : {
        left : "question2left",
        right : "question2right",
        quest : "comment s'appelle michel ?"
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
  .demo1 {
    height : 100%;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .awnser {
    pointer-events: none;
    position : absolute;
    font-size: 70px;
    z-index: 9;
    color: rgb(0, 0, 0);
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
