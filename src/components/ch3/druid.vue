<template>
  <div class="druid">
    <div class="text">
      <p>TU RENCONTRE UN MONSIEUR</p>
      <p>Certainement votre imagination, ou un petit animal. Rien d'alarmant... Vous reprenez la route<span v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></span></p>
    </div>
    <Curseur/>
  </div>
</template>

<script>
import Curseur from '../cursor';

export default {
  name: 'druid',
  components: {
    Curseur,
  },
  data() {
    return {
      datas: {
        left : "",
        right : "",
        quest : "",
        cinematic: true,
        scene: "town"
      }
    }
  },
  methods: {
    emitToParent() {
      console.log("moncul");
      this.$emit('childToParent', this.datas);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .druid {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/check.jpeg");

    .text {
      position : absolute;
      font-size: 22px;
      z-index: 9999;
      padding : 10px 50px;
      color: rgb(255, 255, 255);
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  img {
    height : 100%;
    width : 100%;
    object-fit: cover;
    transition: .3s;
  }
  span {
    position: absolute;
    transform : translate(0, -62%);
    margin-left: 10px;
    margin-top: 20px;
    font-size: 30px;
    animation-name: slidein;
    animation-duration: .6s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @keyframes slidein {
  from {
    transform: translate(0, -62%);
  }
  to {
    transform: translate(6px, -62%);
  }
}
</style>
