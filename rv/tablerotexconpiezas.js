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
//////////////////////////////////////////////////Torre 
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
 //////////////////////////////////Piezas Alfil
var p1Formaalf= new THREE.CylinderGeometry(2,2,4,false);
var p2Formaalf= new THREE.CylinderGeometry(1.5,1.5,3.5,false);
var p3Formaalf= new THREE.CylinderGeometry(1,1,2.5,false);

p2Formaalf.translate(0,4,0);
p3Formaalf.translate(0,7.5,0);


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

  
alfilMalla1.rotateX(Math.PI/2);///ya
alfilMalla1.translateY(3);
alfilMalla1.translateZ(-70); 
alfilMalla1.translateX(-50); 
 
alfilMalla2.rotateX(Math.PI/2);
alfilMalla2.translateY(3);
alfilMalla2.translateZ(-70);
alfilMalla2.translateX(-20);
 
alfilMalla3.rotateX(Math.PI/2);
alfilMalla3.translateY(3);
alfilMalla3.translateZ(-50); 
alfilMalla3.translateX(70);
 
alfilMalla4.rotateX(Math.PI/2);
alfilMalla4.translateY(3);
alfilMalla4.translateZ(-20);
alfilMalla4.translateX(70);
 
 
/////////////////////////////////////////////Peon
var p1Formapeon= new THREE.CylinderGeometry(1,1,1,false);
var p2Formapeon= new THREE.CylinderGeometry(.5,.5,1,false);
var p3Formapeon= new THREE.SphereGeometry(1,false);

p2Formapeon.translate(0,2,0);
p3Formapeon.translate(0,1.5,0);


var p1Mallapeon= new THREE.Mesh(p1Formapeon);
var p2Mallapeon= new THREE.Mesh(p2Formapeon);
var p3Mallapeon= new THREE.Mesh(p3Formapeon);

var peonForma= new THREE.Geometry();

peonForma.merge(p1Mallapeon.geometry,p1Mallapeon.matrix);
peonForma.merge(p2Mallapeon.geometry,p2Mallapeon.matrix);
peonForma.merge(p3Mallapeon.geometry,p3Mallapeon.matrix);

var peonMalla1= new THREE.Mesh(peonForma,blancas);
var peonMalla2= new THREE.Mesh(peonForma,blancas);
var peonMalla3= new THREE.Mesh(peonForma,negras);
var peonMalla4= new THREE.Mesh(peonForma,negras);

  
peonMalla1.rotateX(Math.PI/2);
peonMalla1.translateY(3);
peonMalla1.translateZ(-60); 
 
peonMalla3.rotateX(Math.PI/2);
peonMalla3.translateY(3);
peonMalla3.translateZ(-45); 

 
peonMalla2.rotateX(Math.PI/2);
peonMalla2.translateY(3);
peonMalla2.translateZ(35);
peonMalla2.translateX(-45);
 
peonMalla4.rotateX(Math.PI/2);
peonMalla4.translateY(3);
peonMalla2.translateZ(-35);
peonMalla4.translateX(45);
///////////////////////////////////////////////Reyna 
var p1Formareyna= new THREE.CylinderGeometry(2.5,2.2,3,false);
var p2Formareyna= new THREE.CylinderGeometry(2,1.8,3,false);
var p3Formareyna= new THREE.CylinderGeometry(2.3,2.5,2,false);
var p4Formareyna= new THREE.SphereGeometry(1.5,false);

p2Formareyna.translate(0,3,0);
p3Formareyna.translate(0,5,0);
p4Formareyna.translate(0,5,0);


var p1Mallareyna= new THREE.Mesh(p1Formareyna);
var p2Mallareyna= new THREE.Mesh(p2Formareyna);
var p3Mallareyna= new THREE.Mesh(p3Formareyna);
var p4Mallareyna= new THREE.Mesh(p3Formareyna);

var reynaForma= new THREE.Geometry();

reynaForma.merge(p1Mallareyna.geometry,p1Mallareyna.matrix);
reynaForma.merge(p2Mallareyna.geometry,p2Mallareyna.matrix);
reynaForma.merge(p3Mallareyna.geometry,p3Mallareyna.matrix);
reynaForma.merge(p4Mallareyna.geometry,p4Mallareyna.matrix);
 
var reynaMalla1= new THREE.Mesh(reynaForma,blancas);
var reynaMalla2= new THREE.Mesh(reynaForma,negras);
  
reynaMalla1.rotateX(Math.PI/2);
reynaMalla1.translateY(3);
reynaMalla1.translateZ(-70); 
reynaMalla1.translateX(-55);
 
reynaMalla2.rotateX(Math.PI/2);
reynaMalla2.translateY(3);
reynaMalla2.translateZ(55);
reynaMalla2.translateX(-35);
///////////////////////////////////////////////Caballo 
var p1Formahorse= new THREE.CylinderGeometry(1,1.5,1,false);
var p2Formahorse= new THREE.CylinderGeometry(1,1,3,false);
var p3Formahorse= new THREE.BoxGeometry(1,1,1,false);
var p4Formahorse= new THREE.BoxGeometry(1,2.5,1,false);
var p5Formahorse= new THREE.BoxGeometry(1,1,1,false);

p2Formahorse.translate(0,1,0);
p3Formahorse.translate(0,2,0);
p4Formahorse.translate(1,2,0);
p4Formahorse.translate(2,5,0);
p5Formahorse.translate(2,4,0);

var p1Mallahorse= new THREE.Mesh(p1Formahorse);
var p2Mallahorse= new THREE.Mesh(p2Formahorse);
var p3Mallahorse= new THREE.Mesh(p3Formahorse);
var p4Mallahorse= new THREE.Mesh(p3Formahorse);

var horseForma= new THREE.Geometry();

horseForma.merge(p1Mallahorse.geometry,p1Mallahorse.matrix);
horseForma.merge(p2Mallahorse.geometry,p2Mallahorse.matrix);
horseForma.merge(p3Mallahorse.geometry,p3Mallahorse.matrix);
horseForma.merge(p4Mallahorse.geometry,p4Mallahorse.matrix);
 
var horseMalla1= new THREE.Mesh(horseForma,blancas);
var horseMalla2= new THREE.Mesh(horseForma,negras);
var horseMalla3= new THREE.Mesh(horseForma,blancas);
var horseMalla4= new THREE.Mesh(horseForma,negras); 
 
horseMalla1.rotateX(Math.PI/2);
horseMalla1.translateY(3);
horseMalla1.translateZ(20); 
horseMalla1.translateX(25);
 
horseMalla2.rotateX(Math.PI/2);
horseMalla2.translateY(3);
horseMalla2.translateZ(10);
horseMalla2.translateX(25);

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
escena.add(torreMalla1);
escena.add(torreMalla2);
escena.add(torreMalla3);
escena.add(torreMalla4);
escena.add(alfilMalla1);
escena.add(alfilMalla2);
escena.add(alfilMalla3);
escena.add(alfilMalla4);
escena.add(peonMalla1);
escena.add(reynaMalla1)
escena.add(reynaMalla2)
escena.add(horseMalla1)

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

