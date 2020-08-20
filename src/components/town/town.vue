<template>
  <div class="town">
    <p>bite</p>
    <button v-on:click="emitToParent()">Continuez</button>
    <img src="../../assets/town.jpg" ref="img" alt="">
    <Curseur/>
  </div>
</template>

<script>
import Curseur from '../cursor';

export default {
  name: 'town',
  components: {
    Curseur,
  },
  data() {
    return {
      datas: {
        left : "wolf",
        right : "thief",
        quest : "T'arrives en ville connard keketufe ?",
        cinematic: false,
        scene: ""
      }
    }
  },
  methods: {
    emitToParent() {
      this.$emit('childToParent', this.datas);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .town {
    height : 100%;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p{
    position: absolute;
    margin: 0
  }
  .awnser {
    pointer-events: none;
    position : absolute;
    font-size: 30px;
    z-index: 9;
    padding : 10px 20px;
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.5);
  }
  img {
    height : 100%;
    width : 100%;
    object-fit: cover;
    transition: .3s;
  }
  button{
    cursor: none;
    position: absolute;
  }
</style>
