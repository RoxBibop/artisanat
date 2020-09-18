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

import auberge from '../components/question1/auberge';
import calm from '../components/au1/calm';
import check from '../components/ch1/check';
import chemin from '../components/question1/chemin';
import foodCalm from '../components/au2/foodCalm';
import foodPanic from '../components/au2/foodPanic';
import isChecking from '../components/ch2/isChecking';
import meet from '../components/meet';
import meet2 from '../components/meet2';
import nocheck from '../components/ch1/nocheck';
import panic from '../components/au1/panic';
import question from '../components/question';
import thief from '../components/town/thief';
import town from '../components/town/town';
import town2 from '../components/town/town2';
import welcInn from '../components/au1/welcInn';
import welcInn2 from '../components/au1/welcInn2';
import wolf from '../components/town/wolf';
import peasant from '../components/wolf/peasant';
import wolfAttack from '../components/wolf/wolfAttack';
import brave from '../components/wolf/brave';
import coward from '../components/wolf/coward';
import goodCons from '../components/wolf/goodCons';
import badCons from '../components/wolf/badCons';
import congrats from '../components/wolf/congrats';
import angryPeasants from '../components/wolf/angryPeasants';
import meetthief from '../components/thief/meetthief';
import help from '../components/thief/help';
import steal from '../components/thief/steal';
import goodConsThief from '../components/thief/goodConsThief';
import badConsThief from '../components/thief/badConsThief';
import takeGold from '../components/takeGold';
import noTakeGold from '../components/noTakeGold';
import ritual from '../components/ritual';
import stayGold from '../components/consequences/stayGold';
import leave from '../components/consequences/leave';
import stay from '../components/consequences/stay';
import negociate from '../components/consequences/negociate';


export default {
  components: {
    auberge,
    calm,
    check,
    chemin,
    foodCalm,
    foodPanic,
    isChecking,
    meet,
    meet2,
    nocheck,
    panic,
    question,
    thief,
    town,
    town2,
    welcInn,
    welcInn2,
    wolf,
    peasant,
    wolfAttack,
    brave,
    coward,
    goodCons,
    badCons,
    congrats,
    angryPeasants,
    meetthief,
    help,
    steal,
    goodConsThief,
    badConsThief,
    takeGold,
    noTakeGold,
    negociate,
    stay,
    stayGold,
    leave
  },
  data() {
    return {
      laquestion : "Sur votre gauche, vous aperçevez un chemin qui semble mener à la sortie de la fôret. Sur votre droite, ce qui semble être une auberge.",
      leftComponent : "chemin",
      rightComponent : "auberge",
      fromChild : "",
      cinematic: false,
      scene:"",
      visible: false
    }
  },

  methods: {
    onChildClick (value) {
      this.leftComponent = value.left;
      this.rightComponent = value.right;
      this.laquestion = value.quest;
      this.cinematic = value.cinematic;
      this.scene = value.scene;
    },
  },
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

