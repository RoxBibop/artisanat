<template>
  <div class="stayGold" v-on:click="click()">
    <div class="awnser">
      Vous décidez après un temps de reflexion de rester, cet endroit vous plaît et vous voulez vous y aventurer avec l'aide de l'or que tuvous avez récolté.
    </div>
    <img src="../../assets/inn.png" ref="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'stayGold',
  data() {
    return {
      datas : {
        left : "",
        right : "",
        quest : "",
        scene : "",
        cinematic: true,
      }
    }
  },
  methods: {
    click(){
      this.$store.commit("increment", "A");
      this.$store.commit("increment", "E");
      this.$store.commit("increment", "S");
      this.$router.push('results');
    }
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .stayGold {
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
