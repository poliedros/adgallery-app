import React from 'react';

import * as THREE from "three";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

Animation.propTypes = {};

Animation.defaultProps = {};

export default function Animation() {
  if (typeof window !== "undefined") {
  if(typeof document !== 'undefined') {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 400, window.innerWidth/window.innerHeight, 0.001, 5000 );
    
    var renderer = new THREE.WebGLRenderer({ alpha: true, antialiase: true });
    renderer.setClearColor( 0x000000, 0 );

    renderer.setSize((window.innerWidth/2.5)*1, (window.innerHeight/2.5)*1);
   
    document.body.appendChild(renderer.domElement);

    camera.position.y = 0.4;
    camera.position.z = 2;

    var light = new THREE.DirectionalLight(0xefefff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);
    var light = new THREE.DirectionalLight(0xffefef, 1);
    light.position.set(-1, -1, -1).normalize();
    scene.add(light);

    window.addEventListener("resize", function() {
      let width = window.innerWidth;
      let height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    var loader = new GLTFLoader();
    var mixer;
    var model;
    loader.load(
      "./summer_girl.glb", function( gltf ) {

        // shadows and materials
        gltf.scene.traverse( function( node ) {
            if ( node instanceof THREE.Mesh ) { 
              node.castShadow = true; 
              node.material.side = THREE.DoubleSide;
            }
          }
        );

        model = gltf.scene;
        model.scale.set(0.25, 0.25, 0.25);
        scene.add(model);

        console.log(gltf);

        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();

        document.body.addEventListener("click", kill);
        function kill() {
        }
      }
    );

    var clock = new THREE.Clock();
    function render() {
      requestAnimationFrame(render);
      var delta = clock.getDelta();
      if (mixer != null) mixer.update(delta);
      // if (model) model.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    render();
  }
}

    return (
      <div id="canvas" />
    )
}