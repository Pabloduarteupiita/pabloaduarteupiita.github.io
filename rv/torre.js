var p1Forma= new THREE.CylinderGeometry(.5,.5,1);
var p2Forma= new THREE.CylinderGeometry(.7,.7,.5);
var p3Forma= new THREE.CylinderGeometry(.7,.7,.5);

p3Forma.position.y += -1;

var p1Malla= new THREE.Mesh(p1Forma);
var p2Malla= new THREE.Mesh(p2Forma);
var p3Malla= new THREE.Mesh(p3Forma);

var torreForma= new THREE.Geometry();

torreForma.merge(p1Malla.geometry,p1Malla.matrix);
torreForma.merge(p2Malla.geometry,p2Malla.matrix);
torreForma.merge(p3Malla.geometry,p3Malla.matrix);

var material= new THREE.MeshNormalMaterial();
var torreMalla= new THREE.Mesh(torreForma,material);

var escena= new THREE.Scene();
escena.add(torreMalla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=5;

renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara)
