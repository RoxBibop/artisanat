<template>
  <div class="question">
    <p>{{this.texte}}</p>
  </div>
</template>

<script>
export default {
  name: 'question',
  props: {
    questionTxt: String
  },
  data(){
    return {
      x: 0,
      texte: ""
    }
  },
  isReady() {
    console.log("bonjour à tous")
  },
  watch: {
    '$props':{
      handler: function () { 
        this.test();
        this.typeWriter();
      },
      deep: true
    }
  },
  mounted() {
    this.test();
    this.typeWriter();
  },
  methods: {
    test () {
      console.log("ici ça marche");
      this.x = 0;
      this.texte = "";
    },
    typeWriter() {
      let textEffect = this.questionTxt;
      if (this.x < textEffect.length) {
        this.texte += textEffect.charAt(this.x);
        this.x++;
        setTimeout(this.typeWriter, 40);
        if (this.x == textEffect.length - 1) {
          console.log(this.x);
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .question {
    position: absolute;
    bottom : 25px;
    left : 50%;
    transform: translateX(-50%);
    p {
      background-color: rgba(0, 0, 0, 0.616);
      padding : 20px 60px;
      font-size: 23px;
    }
  }
</style>
