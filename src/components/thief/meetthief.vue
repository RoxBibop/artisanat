<template>
  <div class="meetthief">
    <div class="text">
      <p>{{this.texte}}
      <span class="arrowBtn" v-on:click="emitToParent()"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/>
      </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'meetthief',
  data() {
    return {
      datas : {
        left : "steal",
        right : "help",
        quest : "Le groupe de voleurs vous proposent de vous joindre à eux pour leur prochain larcin. Cependnat, vous apercevez plusieurs besaces contenant une partie de leur butin...",
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
      let textEffect = "Vous remontez la trace des voleurs et tombez sur un groupe de voleurs peu commodes, mais qui semblent étrangement vous faire confiance.";
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
  .meetthief {
    height : 100vh;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/meetthief.jpg");
    background-size: cover;
  }
  
  img {
    height : 100%;
    width : 100%;
    object-fit: cover;
    transition: .3s;
  }

  // .text {
  //   width : 60%;
  //   padding : 10px 50px 30px 50px;
  // }
</style>
