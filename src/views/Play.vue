<template>
  <div class="test">
    <question v-bind:questionTxt="laquestion"/>
    <div class="aaaaaa" v-on:click="changeQuestion">AAAA</div>
  </div>
</template>

<script>

export default {
  components: {
    question,
  },
  data() {
    return {
      laquestion : "sdfsfdsfdsfdsfdsf klkdsjf skdjf sjf ssdfkj lkzjfkjz"
    }
  },

  methods: {
    changeQuestion : function () {
      this.laquestion = "aaaaddddddd";
    }
  }
}
</script>


<style scoped lang="scss">
  .aaaaaa {
    position: absolute;
    bottom : 50px;
    left : 10%;
    transform: translateX(-50%);
  }
</style>

