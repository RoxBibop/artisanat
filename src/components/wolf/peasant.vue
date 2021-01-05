<template>
  <div class="peasant">
    <div class="text">
      <p>{{this.texte}}
      <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/>
      </span>
      </p>
      <Curseur/>
    </div>
  </div>
</template>

<script>
import Curseur from '../cursor';

export default {
  name: 'peasant',
  components: {
    Curseur,
  },
  data() {
    return {
      datas : {
        left : "",
        right : "",
        quest : "",
        cinematic: true,
        scene: "wolfAttack"
      },
      x: 0,
      texte: ""
    }
  },
  methods: {
    emitToParent () {
      this.$emit('childToParent', this.datas)
    },
    typeWriter() {
      let textEffect = "Vous decidez donc d'aider les fermiers. Vous vous dirigez vers leur ferme et sur le chemin...";
      if (this.x < textEffect.length) {
        this.texte += textEffect.charAt(this.x);
        this.x++;
        setTimeout(this.typeWriter, 40);
      }
    }
  },
  mounted(){
    this.typeWriter();
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .peasant {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/farm.jpg");
    background-size: cover;
  }
  
  img {
    height : 100%;
    width : 100%;
    object-fit: cover;
    transition: .3s;
  }

  .text {
    padding : 10px 50px 30px 50px;
  }
</style>
