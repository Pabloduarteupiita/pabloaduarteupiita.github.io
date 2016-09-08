var cubo1Forma= new THREE.BoxGeometry(1,1,1);
var cubo2Forma= new THREE.BoxGeometry(1,1,1);
cubo1Forma.translate(0,0,0);
cubo2Forma.translate(1,0,0);

var tablero1Malla= new THREE.Mesh(cubo1Forma);
var tablero2Malla= new THREE.Mesh(cubo2Forma);

var tableroForma= new THREE.Geometry();
tableroForma.merge(tablero1Malla.geometry,tablero1Malla.matrix);
tableroForma.merge(tablero2Malla.geometry,tablero2Malla.matrix);

var material= new THREE.MeshNormalMaterial();
var tableroMalla= new THREE.Mesh(tableroForma,material);

var escena= new THREE.Scene();
escena.add(tableroMalla);

var camara= new THREE.PerspectiveCamera();


camara.position.z=5;


renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara)
