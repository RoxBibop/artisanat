<template>
  <div id="container"></div>
</template>

<script>
  import * as Three from 'three'
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
  import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

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
  methods: {
    init: function(){
      const container = document.querySelector('#container');
      
      // create a scene
      let scene = new Three.Scene(),
          renderer,
          planet,
          camera;

      // set values for the perspective camera
      const fov = 35,
            aspect = container.clientWidth / container.clientHeight,
            near = 0.1,
            far = 500;

      // set camera and its position
      camera = new Three.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(0, 0, 5);

      // adding an ambient light
      const ambient = new Three.AmbientLight(0x404040, 7);
      scene.add(ambient); 

      // adding a light
      const directionalLight = new Three.DirectionalLight( 0x404040, 1);
      directionalLight.position.set(15,15,5);
      scene.add( directionalLight );

      // renderer
      renderer = new Three.WebGLRenderer({antialias : true, alpha: true});
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      container.appendChild(renderer.domElement);


      // load texture of the model
      let mtlloader = new MTLLoader();
      mtlloader.load('./3d/earth/earth.mtl', function(materials){
        materials.preload();

        // load 3d model object
        let objloader = new OBJLoader();
        objloader.setMaterials(materials);
        objloader.load('./3d/earth/earth.obj', function(obj){
          scene.add(obj);
          planet = obj;
          // planet.rotation.y += 0.65;
          // renderer.render(scene, camera);
          // console.log(planet);
          animateRotate()
        })
      })

      function animateRotate(){
        requestAnimationFrame(animateRotate);
        planet.rotation.y += 0.02;
        renderer.render(scene, camera);
      }
    },
  },
  mounted() {
    this.init();
  }
}
</script>

<style>
  #container {
    height : 100%;
    width: 100%;
  }
</style>