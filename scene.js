

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5;

let renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

let render = function () {
    requestAnimationFrame(render);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;

    renderer.render(scene, camera);
}

let geoSphere = new THREE.SphereGeometry(1, 20, 20);
let geoBox = new THREE.BoxGeometry(1, 1, 1);

let material = new THREE.MeshLambertMaterial({ color: 0xF1F400 })
let mesh = new THREE.Mesh(geoBox, material);

let light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);
scene.add(mesh);

render();