function Pieza(){
THREE.Object3D.call(this);
this.piernaIzq=newTHREE.Mesh(new THREE.BoxGeometry(1,5,1));
this.piernaDer=newTHREE.Mesh(new THREE.BoxGeometry(1,5,1));
var cuerpo=newTHREE.Mesh(new THREE.BoxGeometry(5,10,15);
this.add(this.piernaIzq,this.piernaDer,cuerpo);

this.piernaIzq.position.z=-2
this.piernaIzq.position.y=-2.5
this.piernaDer.position.z=-2
this.piernaDer.position.y=-2.5
cuerpo.position.z=2.5
}

var pieza
pieza.protype=new THREE.Object3D;
fucntion setup(){
pieza=new Pieza()

}

functionloop(){
pieza.rotateY=0.1;
