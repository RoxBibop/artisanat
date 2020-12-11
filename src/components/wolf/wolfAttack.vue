<template>
  <div class="wolfAttack">
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
  name: 'wolfAttack',
  components: {
    Curseur,
  },
  data() {
    return {
      datas : {
        left : "coward",
        right : "brave",
        quest : "... en regardant sur votre droite, vous voyez une fourche laissée sur la clôture de la ferme. Que décidez-vous de faire ?",
        cinematic: false,
        scene: ""
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
      let textEffect = "...un loup semble se diriger vers la ferme et les moutons...";
      if (this.x < textEffect.length) {
        this.texte += textEffect.charAt(this.x);
        this.x++;
        setTimeout(this.typeWriter, 40);
        if (this.x == textEffect.length - 1) {
          console.log(this.x);
        }
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
  .wolfAttack {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/wolfAttack.jpg");
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
