<template>
  <div class="intro">
    <Curseur ref="cursor"/>
    <p class="text">
      {{texte}}
      <span class="arrowBtn">    <router-link to="/play" class="play link"><fa-icon :icon="['fas','arrow-circle-right']" class="link"/></router-link></span></p>
    <img src="../assets/intro.jpg" ref="img" alt="">

  </div>
</template>

<script>
  import Curseur from '@/components/cursor.vue';
  export default {
    name: 'introGame',
    components: {
      Curseur,
    },
    data : function() {
      return {
        texte: "",
        x: 0,
      }
    },
    methods : {
      isReady() {
        console.log("is rendered")
      },
      typeWriter() {
        let textEffect = "Sans trop savoir comment vous en êtes arrivés là, vous vous reveillez au coeur d'une forêt dans une époque qui semble différente de la votre et vêtu étrangement. Vous allez tout tenter pour rentrer chez vous, à votre époque. Mais la première chose à faire, c'est probablement de sortir de cette forêt..."

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
    mounted() {
      this.isReady();
      this.typeWriter();
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';

.intro{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .play{
    position: absolute;  
    transform: translateX(-50%);
    bottom: 5px;
    left: 50%;
    color: rgb(255, 255, 255);
    text-decoration: none;
  }

  .text {
    width : 70%;
    padding : 40px 60px;
  }

  .arrowBtn {
    bottom : 0;
    right : 50px;
  }
}
</style>