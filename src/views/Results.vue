<template>
  <div class="bite">
      A: <span>{{this.$store.state.A}}</span><br>
      C: <span>{{this.$store.state.C}}</span><br>
      E: <span>{{this.$store.state.E}}</span><br>
      I: <span>{{this.$store.state.I}}</span><br>
      R: <span>{{this.$store.state.R}}</span><br>
      S: <span>{{this.$store.state.S}}</span><br>
  </div>
</template>

<script>
  export default {
    name: 'Results',
    data() {
      return {
      }
    },
    methods: {
      
    },
  }
</script>

<style lang="scss" scoped>
.bite{
  color: blue;
  span{
    color: red;
    font-weight: bold;
  }
}
</style>