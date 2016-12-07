var camara, escena, rederizador;
function setup(){

var text1=new THREE.TextureLoader().load('crb.jpg');
var text2=new THREE.TextureLoader().load('crn.jpg');
var text3=new THREE.TextureLoader().load('gr.jpg');
 
var blancas= new THREE.MeshBasicMaterial({map:text1});
var negras= new THREE.MeshBasicMaterial({map:text2});
var granito= new THREE.MeshBasicMaterial({map:text3});

  
 //////////////////////////////////Piezas
var p1Formaalf= new THREE.CylinderGeometry(1,1,1,false);
var p2Formaalf= new THREE.CylinderGeometry(.7,.7,1,false);
var p3Formaalf= new THREE.CylinderGeometry(.3,.3,1,false);

p2Formaalf.translate(0,1,0);
p3Formaalf.translate(0,2,0);


var p1Mallaalf= new THREE.Mesh(p1Formaalf);
var p2Mallaalf= new THREE.Mesh(p2Formaalf);
var p3Mallaalf= new THREE.Mesh(p3Formaalf);

var alfilForma= new THREE.Geometry();

alfilForma.merge(p1Mallaalf.geometry,p1Mallaalf.matrix);
alfilForma.merge(p2Mallaalf.geometry,p2Mallaalf.matrix);
alfilForma.merge(p3Mallaalf.geometry,p3Mallaalf.matrix);

var alfilMalla1= new THREE.Mesh(alfilForma,blancas);
var alfilMalla2= new THREE.Mesh(alfilForma,blancas);
var alfilMalla3= new THREE.Mesh(alfilForma,negras);
var alfilMalla4= new THREE.Mesh(alfilForma,negras);

  
alfilMalla1.rotateX(Math.PI/2);
alfilMalla1.translateY(3);
alfilMalla1.translateZ(-70); 
 
alfilMalla3.rotateX(Math.PI/2);
alfilMalla1.translateY(8);
alfilMalla1.translateZ(-70); 

 ////////////////////////////Tabla
  var campoVision = 45;
  var relacionAspecto = window.innerWidth / window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 1000;
  camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
  camara.position.z=50;
  camara.position.x=160;
  camara.position.y=40;
  camara.lookAt(new THREE.Vector3(40,40,0));
  camara.rotateZ(Math.PI/2);
  /////////////////////////////////Escena
  escena = new THREE.Scene();
 //////////////////////////////////////////////////
  var base = new THREE.Mesh( new THREE.BoxGeometry(90, 90, 2), granito );
  base.position.x=35;
  base.position.y=35;
  base.position.z=-2;
  escena.add(base);
  escena.add(alfilMalla1);
  escena.add(alfilMalla2);
  escena.add(alfilMalla3);
  escena.add(alfilMalla4);
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderizador.domElement);
}
function loop(){
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
}
setup();
loop();
  
 
