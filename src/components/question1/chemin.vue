<template>
  <div class="chemin" v-on:click="emitToParent()">
   
    <div class="awnser" v-if="displayText">Vous vous aventurez dans le chemin</div>
    <img src="../../assets/chemin.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'chemin',
  data() {
    return {
      datas : {
        left : "check",
        right : "nocheck",
        quest : "Vous vous aventurez dans le chemin, et entendez soudain un son suspect semblant provenir d'un buisson à vos pieds.",
        scene : "",
        cinematic: false,
      },
      displayText: false,
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.datas)
      this.$store.commit("increment", "C");
      this.$store.commit("increment", "S");
      this.$store.commit("increment", "R");
    },
  },
  mounted: function() {
    let time = this.datas.quest.length * 50
    setTimeout(() => {
      this.displayText = true;
    }, time);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .chemin {
    height : 100%;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .awnser {
    pointer-events: none;
    position : absolute;
    font-size: 18px;
    z-index: 9;
    padding : 20px 60px;
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
