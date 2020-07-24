<template>
  <div class="play" v-on:mousemove="handleCursor">
    <div class="leftCtn">
      <component v-bind:is="leftComponent" class="left"></component>
    </div>
    <div class="rightCtn">
      <component v-bind:is="rightComponent" class="right"></component>
    </div>
    <question v-bind:questionTxt="laquestion"/>
    <div class="aaaaaa" v-on:click="changeQuestion"></div>    
    <div class="curssor" ref="cursor"></div>
  </div>
</template>

<script>

import question from '../components/question';
import demo1 from '../components/question1/demo1';
import demo2 from '../components/question1/demo2';


export default {
  components: {
    question,
    demo1,
    demo2
  },
  data() {
    return {
      laquestion : "sdfsfdsfdsfdsfdsf klkdsjf skdjf sjf ssdfkj lkzjfkjz",
      leftComponent : "demo1",
      rightComponent : "demo2"
    }
  },

  methods: {
    changeQuestion : function () {
      this.laquestion = "aaaaddddddd";
    },
    handleCursor : function(e) {
      let cursor = this.$refs.cursor;

      cursor.style.top = `${e.y}px`;
      cursor.style.left = `${e.x}px`;

    }
  }
}
</script>


<style scoped lang="scss">
  // .left, .right {
  //   width : 100%;
  //   height: 100vh;
  // }
  .leftCtn, .rightCtn {
    width : 50%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .curssor {
    pointer-events: none;
    height : 10px;
    width : 10px; 
    background-color: white;
    position: absolute;
    border-radius: 50%;
  }
  .play {
    cursor : none;
    height : 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>

