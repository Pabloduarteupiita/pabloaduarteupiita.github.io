var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild (renderizador.domElement);

var color1 = new THREE.Color("rgb(128, 52, 26)");
var color2 = new THREE.Color("rgb(46, 255, 46)");

var forma1 = new THREE.BoxGeometry( 1, 3);
var material1 = new THREE.MeshNormalMaterial({color1});
var cube = new THREE.Mesh( forma1, material1 );
cube.position.y += -1;
escena.add(cube);
var forma = new THREE.CircleGeometry( 1, 64 );
var material = new THREE.MeshNormalMaterial({color2}); 
var circulo = new THREE.Mesh(forma, material);
escena.add(circulo);

renderizador.render(escena,camara);

