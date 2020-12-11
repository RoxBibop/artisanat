<template>
  <div class="auberge"  v-on:click="emitToParent()">
    <div class="awnser" v-if="displayText">Vous vous dirigez vers l'auberge</div>
    <img src="../../assets/inn.png" ref="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'auberge',
  data() {
    return {
      datas : {
        left : "",
        right : "",
        quest : "Vous vous aventurez dans le chemin, et entendez soudain un son suspect semblant provenir d'un buisson à vos pieds.",
        scene : "welcInn",
        cinematic: true,
      },
      displayText: false,
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.datas);
      this.$store.commit("increment", "C");
      this.$store.commit("increment", "R");
      this.$store.commit("increment", "S");
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
  .auberge {
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
