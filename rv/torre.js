var figura1= new THREE.Shape();
figura1.moveTo(10,10);
figura1.lineTo(30,10);
figura1.lineTo(30,30);
figura1.lineTo(10,30);
figura1.lineTo(10,10);
var forma1 = new THREE.ExtrudeGeometry(figura1,{amount:10});
var material1= new THREE.MeshNormalMaterial();
var malla1= new THREE.Mesh(forma1,material1);
malla1.rotateX(Math.PI/2)
forma1.translate(0,1.5,0);

var figura2= new THREE.Shape();
figura2.moveTo(-10,-10);
figura2.lineTo(-10,-30);
figura2.lineTo(-30,-30);
figura2.lineTo(-30,-10);
figura2.lineTo(-10,-10);
var forma2 = new THREE.ExtrudeGeometry(figura2,{amount:10});
var material2= new THREE.MeshNormalMaterial();
var malla2= new THREE.Mesh(forma2,material2);
malla2.rotateX(Math.PI/2)
forma.translate(0,1.5,0);

var figura3= new THREE.Shape();
figura3.moveTo(-10,10);
figura3.lineTo(-30,10);
figura3.lineTo(-30,30);
figura3.lineTo(-10,30);
figura3.lineTo(-10,10);
var forma3 = new THREE.ExtrudeGeometry(figura3,{amount:10});
var material3= new THREE.MeshNormalMaterial();
var malla3= new THREE.Mesh(forma3,material3);
malla3.rotateX(Math.PI/2)
forma3.translate(0,1.5,0);

var figura4= new THREE.Shape();
figura4.moveTo(10,-10);
figura4.lineTo(30,-10);
figura4.lineTo(30,-30);
figura4.lineTo(10,-30);
figura4.lineTo(10,-10);
var forma4 = new THREE.ExtrudeGeometry(figura4,{amount:10});
var material4= new THREE.MeshNormalMaterial();
var malla4= new THREE.Mesh(forma4,material4);
malla4.rotateX(Math.PI/2)
forma4.translate(0,1.5,0);




/////////////////////////////////
var p1Forma= new THREE.CylinderGeometry(.7,.7,1);
var p2Forma= new THREE.CylinderGeometry(1,1,.3);
var p3Forma= new THREE.CylinderGeometry(1,1,.6);

p2Forma.translate(0,.7,0);
p3Forma.translate(0,-.7,0);


var p1Malla= new THREE.Mesh(p1Forma);
var p2Malla= new THREE.Mesh(p2Forma);
var p3Malla= new THREE.Mesh(p3Forma);

var torreForma= new THREE.Geometry();

torreForma.merge(p1Malla.geometry,p1Malla.matrix);
torreForma.merge(p2Malla.geometry,p2Malla.matrix);
torreForma.merge(p3Malla.geometry,p3Malla.matrix);
torreForma.merge(malla1.geometry,malla1.matrix);
torreForma.merge(malla2.geometry,malla2.matrix);
torreForma.merge(malla3.geometry,malla3.matrix);
torreForma.merge(malla4.geometry,malla4.matrix);
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
