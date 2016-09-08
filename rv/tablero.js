var cubo1Forma= new THREE.BoxGeometry(1,1,1);
var cubo2Forma= new THREE.BoxGeometry(1,1,1);

cubo1Forma.translate(0,0,0);
cubo2Forma.translate(1,0,0);

var material1 = new THREE.MeshNormalMaterial({color: 0x996600});
var cube1 = new THREE.Mesh( cubo1, material1 );
var cube2 = new THREE.Mesh( cubo2, material1 );

var escena= new THREE.Scene();
escena.add(tableroMalla);

var camara= new THREE.PerspectiveCamera();


camara.position.z=5;


renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara)
