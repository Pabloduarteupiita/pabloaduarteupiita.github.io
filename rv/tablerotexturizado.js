var camara, escena, rederizador;
function setup(){

 var text1=new THREE.TextureLoader().load('crb.jpg');
 var text2=new THREE.TextureLoader().load('crn.jpg');
 var text3=new THREE.TextureLoader().load('madb.jpg');
 var text4=new THREE.TextureLoader().load('mad.jpg');
 var text5=new THREE.TextureLoader().load('gr.jpg');
  
 var blancas= new THREE.MeshBasicMaterial({map:text1});
 var negras= new THREE.MeshBasicMaterial({map:text2});
 var madera1= new THREE.MeshBasicMaterial({map:text3});
 var madera2= new THREE.MeshBasicMaterial({map:text4});
 var granito= new THREE.MeshBasicMaterial({map:text5});
  
 //////////////////////////////////Piezas
var p1Forma= new THREE.CylinderGeometry(.7,.7,1,false);
var p2Forma= new THREE.CylinderGeometry(1,1,.3,false);
var p3Forma= new THREE.CylinderGeometry(.8,1,.6,false);

var p4Forma= new THREE.CylinderGeometry(0,.2,.2,false);
var p5Forma= new THREE.CylinderGeometry(0,.2,.2,false);
var p6Forma= new THREE.CylinderGeometry(0,.2,.2,false);
var p7Forma= new THREE.CylinderGeometry(0,.2,.2,false);

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

var torreMalla1= new THREE.Mesh(torreForma,blancas);
var torreMalla2= new THREE.Mesh(torreForma,blancas);
var torreMalla3= new THREE.Mesh(torreForma,negras);
var torreMalla4= new THREE.Mesh(torreForma,negras);
  
torreMalla1.rotateX(Math.PI/2);
torreMalla1.translateY(3);
torreMalla1.translateZ(-70); 

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
  var cubo= new Array();
  var a=2;
  for(var k=0; k<64; k++){
    for(var i=0; i<8; i++){
      for(var j=0; j<8; j++){
        if(a==2){
          cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 4), madera1);
          a=1;
        }else{
          cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 4), madera2 );
          a=2;
        }
       cubo[k].position.x=j*10;
       cubo[k].position.y=i*10;
       escena.add(cubo[k]);
     }
     if(a==2){
          a=1;
        }else{
          a=2;
        }
    }
  }
  //////////////////////////////////////////////////
  var base = new THREE.Mesh( new THREE.BoxGeometry(90, 90, 2), granito );
  base.position.x=35;
  base.position.y=35;
  base.position.z=-2;
  escena.add(base);
  //escena.add(torreMalla1);
  escena.add(torreMalla2);
  escena.add(torreMalla3);
  escena.add(torreMalla4);
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
