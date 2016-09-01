var figura1= new THREE.Shape();

figura1.moveTo(10,10);
figura1.lineTo(30,10);
figura1.lineTo(30,30);
figura1.lineTo(10,10);
figura1.lineTo(10,10);
var forma1 = new THREE.ExtrudeGeometry(figura1,{amount:10});
var material1= new THREE.MeshNormalMaterial();
var malla1= new THREE.Mesh(forma1,material1);
malla1.rotateX(Math.PI/4)

var figura2= new THREE.Shape();
figura2.moveTo(-10,-10);
figura2.lineTo(-10,-30);
figura2.lineTo(-30,-30);
figura2.lineTo(-30,-10);
figura2.lineTo(-10,-10);
var forma2 = new THREE.ExtrudeGeometry(figura2,{amount:10});
var material2= new THREE.MeshNormalMaterial();
var malla2= new THREE.Mesh(forma2,material2);
malla2.rotateX(Math.PI/4)





var escena = new THREE.Scene();
escena.add(malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=500;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
