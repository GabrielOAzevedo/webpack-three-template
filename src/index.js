const THREE = require('three');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({alpha: false, antialias: true});
renderer.setClearColor(0x0088cc);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const boxGeometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x59cb72});
const cube = new THREE.Mesh(boxGeometry, material);
scene.add(cube);

camera.position.z = 5;

(function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
})();