
var p1Forma= new THREE.CylinderGeometry(.7,.7,1);
var p2Forma= new THREE.CylinderGeometry(1,1,.3);
var p3Forma= new THREE.CylinderGeometry(.8,1,.6);

var p4Forma= new THREE.CylinderGeometry(0,.2,.2);
var p5Forma= new THREE.CylinderGeometry(0,.2,.2);
var p6Forma= new THREE.CylinderGeometry(0,.2,.2);
var p7Forma= new THREE.CylinderGeometry(0,.2,.2);

p2Forma.translate(0,.7,0);
p3Forma.translate(0,-.7,0);

p4Forma.translate(.5,1,.5);
p5Forma.translate(.5,1,-.5);
p6Forma.translate(-.5,1,.5);
p7Forma.translate(-.2,1,-.2);


var p1Malla= new THREE.Mesh(p1Forma);
var p2Malla= new THREE.Mesh(p2Forma);
var p3Malla= new THREE.Mesh(p3Forma);

var p4Malla= new THREE.Mesh(p4Forma);
var p5Malla= new THREE.Mesh(p5Forma);
var p6Malla= new THREE.Mesh(p6Forma);
var p7Malla= new THREE.Mesh(p7Forma);

var torreForma= new THREE.Geometry();

torreForma.merge(p1Malla.geometry,p1Malla.matrix);
torreForma.merge(p2Malla.geometry,p2Malla.matrix);
torreForma.merge(p3Malla.geometry,p3Malla.matrix);

torreForma.merge(p4Malla.geometry,p4Malla.matrix);
torreForma.merge(p5Malla.geometry,p5Malla.matrix);
torreForma.merge(p6Malla.geometry,p6Malla.matrix);
torreForma.merge(p7Malla.geometry,p7Malla.matrix);

var material= new THREE.MeshNormalMaterial();
var torreMalla= new THREE.Mesh(torreForma,material);

var escena= new THREE.Scene();
escena.add(torreMalla);

var camara= new THREE.PerspectiveCamera();

camara.position.y=2;
camara.position.z=8;

renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara)
