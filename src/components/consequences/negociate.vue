<template>
  <div class="negociate" v-on:click="click()">
    <div class="awnser"  v-if="displayText">Vous ne voulez pas rester dans cette époque, vous essayez de négocier avec le druide pour pouvoir partir.</div>
    <img src="../../assets/negociate.jpg" ref="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'negociate',
  data() {
    return {
      datas : {
        left : "",
        right : "",
        quest : "",
        scene : "",
        cinematic: true,
      },
      displayText: false,
    }
  },
  methods: {
    click(){
      this.$store.commit("increment", "C");
      this.$store.commit("increment", "R");
      this.$store.commit("increment", "I");
      this.$store.commit("increment", "S");
      this.$router.push('results');
    }
  },
  mounted: function() {
    let time = 10600
    setTimeout(() => {
      this.displayText = true;
    }, time);
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .negociate {
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
