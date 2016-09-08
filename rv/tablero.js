var cubo1Forma= new THREE.BoxGeometry(1,1,1);
var cubo2Forma= new THREE.BoxGeometry(1,1,1);

var material1 = new THREE.MeshNormalMaterial({color: 0x996600});

var cube1 = new THREE.Mesh( cubo1Forma, material1 );
var cube2 = new THREE.Mesh( cubo2Forma, material1 );

cubo1Forma.translate(0,0,0);
cubo2Forma.translate(1,0,0);

var escena= new THREE.Scene();
escena.add(cube1);
escena.add(cube2);

var camara= new THREE.PerspectiveCamera();
camara.position.z=5;
renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara)
