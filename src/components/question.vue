<template>
  <div class="question">
    <p>{{questionTxt}}</p>
  </div>
</template>

<script>
export default {
  name: 'question',
  props: {
    questionTxt: String
  },
  isReady() {
    console.log("bonjour à tous")
  },
  watch: {
    '$props':{
      handler: function () { 
        this.test();
      },
      deep: true
    }
  },
  mounted() {
    this.test();
  },
  methods: {
    test () {
      console.log("ici ça marche")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .question {
    position: absolute;
    bottom : 50px;
    left : 50%;
    transform: translateX(-50%);

    p {
      background-color: rgba(0, 0, 0, 0.616);
      padding : 20px 60px;
      font-size: 23px;
    }
  }
</style>
