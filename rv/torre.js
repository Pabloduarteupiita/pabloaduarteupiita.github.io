var torreForma= new THREE.CylinderGeometry(.5,.5,1);
var torreForma1= new THREE.CylinderGeometry(.7,.7,1);
torreForma1.translate(0,1,0);

var torreMalla= new THREE.Mesh(torreForma);
var torreMalla1= new THREE.Mesh(torreForma1);

var torreForma= new THREE.Geometry();

torreForma.merge(torreMalla1.geometry,torreMalla.matrix);
torreForma.merge(torreMalla.geometry,torreMalla1.matrix);

var material= new THREE.MeshNormalMaterial();
var toreMalla= new THREE.Mesh(torreForma,material);

var escena= new THREE.Scene();
escena.add(torreMalla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=5;

renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara)
