<template>
  <div id="container"></div>
</template>

<script>
  import * as Three from 'three'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

  export default {
  name: 'Scene',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
}
</script>

<style>
  #container {
    height : 400px;
    width: 499px;
  }
</style>