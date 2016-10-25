function Agent(x=0,y=0){
THREE.Object3D.call(this);
this.position.x=x;




function Enviroment(){THREE.Scene.call(this);
}
Enviroment.prototype=new THREE.Scene();
Enviroment.prototype.sense=function(){
for (var i=0; i<this.children.lenght;i++){
if(this.children[i].sense!==undefined)
hhis.chlidren[i].sense(this);
}
}
//interfaz entre entorno y agente
Enviroment.prototype.plan=function(){
for(var i=0; i<this.children.length;i++){
if (this.children[i].plan !== undefined)
this.children[i].plan(this);
}
}
Enviroment.prototype.sense=function(){
for(var i=0; i<this.children.length;i++){
if (this.children[i].sense !== undefined)
this.children[i].sense(this);
}
}
Enviroment.prototype.act=function(){
for(var i=0; i<this.children.length;i++){
if (this.children[i].act !== undefined)
this.children[i].act(this);
}
}
