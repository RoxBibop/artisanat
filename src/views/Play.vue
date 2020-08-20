<template>
  <div v-if="!cinematic" class="play">
    <div class="leftCtn">
      <component v-on:childToParent="onChildClick" v-bind:is="leftComponent" class="left"></component>
    </div>
    <div class="rightCtn">
      <component v-on:childToParent="onChildClick" v-bind:is="rightComponent" class="right"></component>
    </div>
    <question v-bind:questionTxt="laquestion"/>
    <div class="curssor" ref="cursor"></div>
  </div>
  <div v-else>
    <component v-on:childToParent="onChildClick" v-bind:is="scene"></component>
  </div>
</template>

<script>

import question from '../components/question';
import chemin from '../components/question1/chemin';
import auberge from '../components/question1/auberge';
import question2left from '../components/question2/question2left';
import question2right from '../components/question2/question2right';
import question3left from '../components/question3/question3left';
import question3right from '../components/question3/question3right';
import panic from '../components/au1/panic';
import calm from '../components/au1/calm';
import food from '../components/au2/food';
import wolf from '../components/town/wolf';
import thief from '../components/town/thief';
import town from '../components/town/town';

export default {
  components: {
    question,
    chemin,
    auberge,
    calm,
    panic,
    question2left,
    question2right,
    question3left,
    question3right,
    food,
    wolf, 
    thief,
    town
  },
  data() {
    return {
      laquestion : "Est-ce que tu vas à l'auberge ou est-ce que tu t'aventures dans le chemin ?",
      leftComponent : "chemin",
      rightComponent : "auberge",
      fromChild : "",
      cinematic: false,
      scene:""
    }
  },

  methods: {
    onChildClick (value) {
      this.leftComponent = value.left;
      this.rightComponent = value.right;
      this.laquestion = value.quest;
      this.cinematic = value.cinematic;
      this.scene = value.scene;
      console.log(this.scene, this.cinematic);
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
    cursor: pointer;
  }

  .play {
    height : 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>

