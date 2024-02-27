// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Sun creation with texture
const sunGeometry = new THREE.SphereGeometry(20, 64, 64);
const sunTexture = new THREE.TextureLoader().load('/static/sun.jpg');
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);
sun.position.set(0, 0, 0);

// Sunlight
const sunLight = new THREE.PointLight(0xffffff, 2, 1000);
sunLight.position.set(0, 0, 0);
scene.add(sunLight);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Controls for interaction
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Adjusted sizes and distances for visual clarity
const sunSize = 20; // Making the Sun larger for visual emphasis
const planets = [
    { name: "Mercury", texture: "/static/mercury.jpg", size: 0.38, orbitRadius: 30, orbitSpeed: 0.04 },
    { name: "Venus", texture: "/static/venus.jpg", size: 0.949, orbitRadius: 44, orbitSpeed: 0.03 },
    { name: "Earth", texture: "/static/earth.jpg", size: 1, orbitRadius: 58, orbitSpeed: 0.02 },
    { name: "Mars", texture: "/static/mars.jpg", size: 0.532, orbitRadius: 72, orbitSpeed: 0.018 },
    { name: "Jupiter", texture: "/static/jupiter.jpg", size: 11.21, orbitRadius: 96, orbitSpeed: 0.016 },
    { name: "Saturn", texture: "/static/saturn.jpg", size: 9.45, orbitRadius: 140, orbitSpeed: 0.014 },
    { name: "Uranus", texture: "/static/uranus.jpg", size: 4, orbitRadius: 182, orbitSpeed: 0.012 },
    { name: "Neptune", texture: "/static/neptune.jpg", size: 3.88, orbitRadius: 224, orbitSpeed: 0.010 },
    { name: "Pluto", texture: "/static/pluto.jpg", size: 0.186, orbitRadius: 248, orbitSpeed: 0.008 },
];

// Function to create planets
function createPlanets() {
    planets.forEach(planet => {
        const geometry = new THREE.SphereGeometry(planet.size, 32, 32);
        const texture = new THREE.TextureLoader().load(planet.texture);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        sphere.position.x = planet.orbitRadius; // Initial position
        planet.sphere = sphere; // Store reference for animation
    });
}

createPlanets();

// Camera position
camera.position.z = 120;

// Rendering loop
function animate() {
    requestAnimationFrame(animate);

    sun.rotation.y += 0.004; // Sun rotation

    planets.forEach(planet => {
        // Rotate each planet on its axis
        planet.sphere.rotation.y += 0.01;

        // Update planet's orbit
        planet.orbitAngle = (planet.orbitAngle || 0) + planet.orbitSpeed;
        planet.sphere.position.x = sun.position.x + planet.orbitRadius * Math.cos(planet.orbitAngle);
        planet.sphere.position.z = sun.position.z + planet.orbitRadius * Math.sin(planet.orbitAngle);
    });

    controls.update();
    renderer.render(scene, camera);
}

animate();
