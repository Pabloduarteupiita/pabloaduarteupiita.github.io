function Pieza(){
THREE.Object3D.call(this);
this.piernaIzq=newTHREE.Mesh(new THREE.BoxGeometry(1,5,1));
this.piernaDer=newTHREE.Mesh(new THREE.BoxGeometry(1,5,1));
var cuerpo=newTHREE.Mesh(new THREE.BoxGeometry(5,10,15));
this.add(this.piernaIzq,this.piernaDer,cuerpo);

this.piernaIzq.position.z=-2;
this.piernaIzq.position.y=-2.5;
this.piernaDer.position.z=-2;
this.piernaDer.position.y=-2.5;
cuerpo.position.y=2.5;
}
var pieza;
Pieza.prototype=new THREE.Object3D;
function setup(){
pieza=new Pieza();
  
var escena=new THREE.Scene();
escena.add(pieza);

var camara= new THREE.PerspectiveCamera();
camara.position.z=15;
  
var lienzo = document.getElementById("ejemplopíernas");
var renderizador = new THREE.WebGLRenderer( { canvas: lienzo, antialias: true } );

renderizador.setSize(600,600);
}
function loop(){
pieza.rotateY(0.1);
pieza.piernaIzq.rotateZ(0.1);

renderizador.render( escena, camara );
}
