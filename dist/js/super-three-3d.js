(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('js/three.module.js')) :
  typeof define === 'function' && define.amd ? define(['js/three.module.js'], factory) :
  (global = global || self, factory(global.THREE));
}(this, (function (THREE) { 'use strict';

  function cube(x) {
    return x * x * x;
  } // import './index.css'

  console.log(cube(5), 9999999);
  var camera, scene, renderer;
  var geometry, material, mesh;
  init();
  animate();

  function init() {
    console.log(THREE);
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 1;
    scene = new THREE.Scene();
    geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    material = new THREE.MeshNormalMaterial();
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  }

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    renderer.render(scene, camera);
  }

})));
