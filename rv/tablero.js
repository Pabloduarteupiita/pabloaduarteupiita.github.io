var cubo1Forma= new THREE.BoxGeometry(1,1,1);
cubo1Forma.translate(0,0,0);

var tableroMalla= new THREE.Mesh(cubo1Forma);

var tableroForma= new THREE.Geometry();
tableroForma.merge(tableroMalla.geometry,tableroMalla.matrix);


var material= new THREE.MeshNormalMaterial();
var tableroMalla= new THREE.Mesh(tableroForma,material);

var escena= new THREE.Scene();
escena.add(tableroMalla);

var camara= new THREE.PerspectiveCamera();

camara.position.x=5;


renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara)
