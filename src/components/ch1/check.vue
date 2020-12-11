<template>
  <div class="check" v-on:click="emitToParent()">
    <div class="awnser" v-if="displayText">Vous décidez de vous arrêter et d'inspecter le buisson</div>
    <img src="../../assets/check.jpeg" ref="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'check',
  data() {
    return {
      datas : {
        left : "",
        right : "",
        quest : "",
        cinematic: true,
        scene: "isChecking"
      },
      displayText: false,
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.datas);
      this.$store.commit("increment", "A");
      this.$store.commit("increment", "E");
      this.$store.commit("increment", "I");
    },
  },
  mounted: function() {
    let time = 2400;
    setTimeout(() => {
      this.displayText = true;
    }, time);
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .check {
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