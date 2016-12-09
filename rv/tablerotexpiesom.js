var camara, escena, rederizador;
var iluminacion= new THREE.PointLight(0xFFFFFF);
iluminacion.position.y= 40;
iluminacion.position.x= 40;
iluminacion.position.z= 50;

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
var p1Forma= new THREE.CylinderGeometry(2.5,2.5,3,false);
var p2Forma= new THREE.CylinderGeometry(2,2,3,false);
var p3Forma= new THREE.CylinderGeometry(2.5,2.5,1,false);

var p4Forma= new THREE.CylinderGeometry(0,.8,.5,false);
var p5Forma= new THREE.CylinderGeometry(0,.8,.5,false);
var p6Forma= new THREE.CylinderGeometry(0,.8,.5,false);
var p7Forma= new THREE.CylinderGeometry(0,.8,.5,false);

p2Forma.translate(0,3,0);
p3Forma.translate(0,6,0);

p4Forma.translate(.8,7,.8);
p5Forma.translate(.8,7,-.8);
p6Forma.translate(-.8,7,.8);
p7Forma.translate(-.5,7,-.5);


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

torreMalla2.rotateX(Math.PI/2);
torreMalla2.translateY(3);

 
torreMalla3.rotateX(Math.PI/2);
torreMalla3.translateY(3);
torreMalla3.translateX(70); 

torreMalla4.rotateX(Math.PI/2);
torreMalla4.translateY(3);
torreMalla4.translateX(70); 
torreMalla4.translateZ(-70); 
 

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
alfilMalla1.translateZ(-50); 
 
 
alfilMalla2.rotateX(Math.PI/2);
alfilMalla2.translateY(3);
alfilMalla2.translateZ(-20);

 
alfilMalla3.rotateX(Math.PI/2);///ya
alfilMalla3.translateY(3);
alfilMalla3.translateZ(-50); 
alfilMalla3.translateX(70);
 
alfilMalla4.rotateX(Math.PI/2);//ya
alfilMalla4.translateY(3);
alfilMalla4.translateZ(-20);
alfilMalla4.translateX(70);
 
 
/////////////////////////////////////////////Peon
var p1Formapeon= new THREE.CylinderGeometry(1,1.5,2,false);
var p2Formapeon= new THREE.CylinderGeometry(1,1,1.5,false);
var p3Formapeon= new THREE.SphereGeometry(1,false);

p2Formapeon.translate(0,2,0);
p3Formapeon.translate(0,3.5,0);


var p1Mallapeon= new THREE.Mesh(p1Formapeon);
var p2Mallapeon= new THREE.Mesh(p2Formapeon);
var p3Mallapeon= new THREE.Mesh(p3Formapeon);
 
var peonForma= new THREE.Geometry();

peonForma.merge(p1Mallapeon.geometry,p1Mallapeon.matrix);
peonForma.merge(p2Mallapeon.geometry,p2Mallapeon.matrix);
peonForma.merge(p3Mallapeon.geometry,p3Mallapeon.matrix);
 

var peonMalla1= new THREE.Mesh(peonForma,blancas);
var peonMalla2= new THREE.Mesh(peonForma,blancas);
var peonMalla3= new THREE.Mesh(peonForma,blancas);
var peonMalla4= new THREE.Mesh(peonForma,blancas);
var peonMalla5= new THREE.Mesh(peonForma,blancas);
var peonMalla6= new THREE.Mesh(peonForma,blancas);
var peonMalla7= new THREE.Mesh(peonForma,blancas);
var peonMalla8= new THREE.Mesh(peonForma,blancas);
var peonMalla9= new THREE.Mesh(peonForma,negras);
var peonMalla10= new THREE.Mesh(peonForma,negras);
var peonMalla11= new THREE.Mesh(peonForma,negras);
var peonMalla12= new THREE.Mesh(peonForma,negras);
var peonMalla13= new THREE.Mesh(peonForma,negras);
var peonMalla14= new THREE.Mesh(peonForma,negras);
var peonMalla15= new THREE.Mesh(peonForma,negras);
var peonMalla16= new THREE.Mesh(peonForma,negras);

  
peonMalla1.rotateX(Math.PI/2);
peonMalla1.translateY(3);
peonMalla1.translateZ(-70); 
peonMalla1.translateX(10); 
 
peonMalla2.rotateX(Math.PI/2);
peonMalla2.translateY(3);
peonMalla2.translateZ(-60); 
peonMalla2.translateX(10); 
 
peonMalla3.rotateX(Math.PI/2);
peonMalla3.translateY(3);
peonMalla3.translateZ(-50); 
peonMalla3.translateX(10); 
 
peonMalla4.rotateX(Math.PI/2);
peonMalla4.translateY(3);
peonMalla4.translateZ(-40); 
peonMalla4.translateX(10); 
 
peonMalla5.rotateX(Math.PI/2);
peonMalla5.translateY(3);
peonMalla5.translateZ(-30); 
peonMalla5.translateX(10); 
 
peonMalla6.rotateX(Math.PI/2);
peonMalla6.translateY(3);
peonMalla6.translateZ(-20); 
peonMalla6.translateX(10); 
 
peonMalla7.rotateX(Math.PI/2);
peonMalla7.translateY(3);
peonMalla7.translateZ(-10); 
peonMalla7.translateX(10); 
 
peonMalla8.rotateX(Math.PI/2);
peonMalla8.translateY(3);
peonMalla8.translateX(10); 
 
peonMalla9.rotateX(Math.PI/2);
peonMalla9.translateY(3);
peonMalla9.translateZ(-70); 
peonMalla9.translateX(60); 
 
peonMalla10.rotateX(Math.PI/2);
peonMalla10.translateY(3);
peonMalla10.translateZ(-60); 
peonMalla10.translateX(60); 
 
peonMalla11.rotateX(Math.PI/2);
peonMalla11.translateY(3);
peonMalla11.translateZ(-50); 
peonMalla11.translateX(60); 
 
peonMalla12.rotateX(Math.PI/2);
peonMalla12.translateY(3);
peonMalla12.translateZ(-40); 
peonMalla12.translateX(60); 
 
peonMalla13.rotateX(Math.PI/2);
peonMalla13.translateY(3);
peonMalla13.translateZ(-30); 
peonMalla13.translateX(60); 
 
peonMalla14.rotateX(Math.PI/2);
peonMalla14.translateY(3);
peonMalla14.translateZ(-20); 
peonMalla14.translateX(60); 
 
peonMalla15.rotateX(Math.PI/2);
peonMalla15.translateY(3);
peonMalla15.translateZ(-10); 
peonMalla15.translateX(60); 
 
peonMalla16.rotateX(Math.PI/2);
peonMalla16.translateY(3);
peonMalla16.translateX(60); 
 
///////////////////////////////////////////////Reyna 
var p1Formareyna= new THREE.CylinderGeometry(2.5,2.5,3,false);
var p2Formareyna= new THREE.CylinderGeometry(2,1.8,2.5,false);
var p3Formareyna= new THREE.CylinderGeometry(2.3,2,2.5,false);
var p4Formareyna= new THREE.SphereGeometry(2,false);
var p5Formareyna= new THREE.SphereGeometry(1,false);
 
p2Formareyna.translate(0,3,0);
p3Formareyna.translate(0,5.5,0);
p4Formareyna.translate(0,8,0);
p5Formareyna.translate(0,10,0);

var p1Mallareyna= new THREE.Mesh(p1Formareyna);
var p2Mallareyna= new THREE.Mesh(p2Formareyna);
var p3Mallareyna= new THREE.Mesh(p3Formareyna);
var p4Mallareyna= new THREE.Mesh(p4Formareyna);
var p5Mallareyna= new THREE.Mesh(p5Formareyna);
 
var reynaForma= new THREE.Geometry();

reynaForma.merge(p1Mallareyna.geometry,p1Mallareyna.matrix);
reynaForma.merge(p2Mallareyna.geometry,p2Mallareyna.matrix);
reynaForma.merge(p3Mallareyna.geometry,p3Mallareyna.matrix);
reynaForma.merge(p4Mallareyna.geometry,p4Mallareyna.matrix);
reynaForma.merge(p5Mallareyna.geometry,p5Mallareyna.matrix);
 
var reynaMalla1= new THREE.Mesh(reynaForma,blancas);
var reynaMalla2= new THREE.Mesh(reynaForma,negras);
  
reynaMalla1.rotateX(Math.PI/2);
reynaMalla1.translateY(3);
reynaMalla1.translateZ(-30);

reynaMalla2.rotateX(Math.PI/2);
reynaMalla2.translateZ(-30);
reynaMalla2.translateY(3);
reynaMalla2.translateX(70);
///////////////////////////////////////////////Caballo 
var p1Formahorse= new THREE.CylinderGeometry(2,2,2,false);
var p2Formahorse= new THREE.CylinderGeometry(1,1,4,false);
var p3Formahorse= new THREE.BoxGeometry(1,1,2,false);
var p4Formahorse= new THREE.BoxGeometry(1,2.5,1,false);
var p5Formahorse= new THREE.BoxGeometry(3,1,1,false);

p2Formahorse.translate(0,2,0);
p3Formahorse.translate(0,5,0);
p4Formahorse.translate(1,6,0);
p5Formahorse.translate(2,6,0);

var p1Mallahorse= new THREE.Mesh(p1Formahorse);
var p2Mallahorse= new THREE.Mesh(p2Formahorse);
var p3Mallahorse= new THREE.Mesh(p3Formahorse);
var p4Mallahorse= new THREE.Mesh(p4Formahorse);
var p5Mallahorse= new THREE.Mesh(p5Formahorse);
 
var horseForma= new THREE.Geometry();

horseForma.merge(p1Mallahorse.geometry,p1Mallahorse.matrix);
horseForma.merge(p2Mallahorse.geometry,p2Mallahorse.matrix);
horseForma.merge(p3Mallahorse.geometry,p3Mallahorse.matrix);
horseForma.merge(p4Mallahorse.geometry,p4Mallahorse.matrix);
horseForma.merge(p5Mallahorse.geometry,p5Mallahorse.matrix);
 
var horseMalla1= new THREE.Mesh(horseForma,blancas);
var horseMalla2= new THREE.Mesh(horseForma,blancas);
var horseMalla3= new THREE.Mesh(horseForma,negras);
var horseMalla4= new THREE.Mesh(horseForma,negras); 


horseMalla1.rotateX(Math.PI/2);
horseMalla1.translateY(3);
horseMalla1.translateZ(-10); 
 
horseMalla2.rotateX(Math.PI/2);
horseMalla2.translateY(3);
horseMalla2.translateZ(-60);
 
horseMalla3.rotateX(Math.PI/2);
horseMalla3.translateY(3);
horseMalla3.translateZ(-10);
horseMalla3.translateX(70);
 
horseMalla4.rotateX(Math.PI/2);
horseMalla4.translateY(3);
horseMalla4.translateZ(-60);
horseMalla4.translateX(70);
 ///////////////////////////////////////////////Rey
var p1Formarey= new THREE.CylinderGeometry(2.8,2.5,3,false);
var p2Formarey= new THREE.CylinderGeometry(2.1,1.8,3,false);
var p3Formarey= new THREE.CylinderGeometry(2.3,2,2,false);
var p4Formarey= new THREE.BoxGeometry(1.5,1.5,4,false);
var p5Formarey= new THREE.BoxGeometry(1.5,4,1.5,false);
 
p2Formarey.translate(0,3,0);
p3Formarey.translate(0,6,0);
p4Formarey.translate(0,9.5,0);
p5Formarey.translate(0,9.5,0);

var p1Mallarey= new THREE.Mesh(p1Formarey);
var p2Mallarey= new THREE.Mesh(p2Formarey);
var p3Mallarey= new THREE.Mesh(p3Formarey);
var p4Mallarey= new THREE.Mesh(p4Formarey);
var p5Mallarey= new THREE.Mesh(p5Formarey);
 
var reyForma= new THREE.Geometry();

reyForma.merge(p1Mallarey.geometry,p1Mallarey.matrix);
reyForma.merge(p2Mallarey.geometry,p2Mallarey.matrix);
reyForma.merge(p3Mallarey.geometry,p3Mallarey.matrix);
reyForma.merge(p4Mallarey.geometry,p4Mallarey.matrix);
reyForma.merge(p5Mallarey.geometry,p5Mallarey.matrix);
 
var reyMalla1= new THREE.Mesh(reyForma,blancas);
var reyMalla2= new THREE.Mesh(reyForma,negras);
  
reyMalla1.rotateX(Math.PI/2);
reyMalla1.translateY(3);
reyMalla1.translateZ(-40);

reyMalla2.rotateX(Math.PI/2);
reyMalla2.translateZ(-40);
reyMalla2.translateY(3);
reyMalla2.translateX(70);

 ////////////////////////////Tabla
  var campoVision = 45;
  var relacionAspecto = window.innerWidth / window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 1000;
  camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
  camara.position.z=50;
  camara.position.x=120;
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
escena.add(peonMalla2);
escena.add(peonMalla3);
escena.add(peonMalla4);
escena.add(peonMalla5);
escena.add(peonMalla6);
escena.add(peonMalla7);
escena.add(peonMalla8);
escena.add(peonMalla9);
escena.add(peonMalla10);
escena.add(peonMalla11);
escena.add(peonMalla12);
escena.add(peonMalla13);
escena.add(peonMalla14);
escena.add(peonMalla15);
escena.add(peonMalla16);
 
escena.add(reynaMalla1);
escena.add(reynaMalla2);
 
escena.add(horseMalla1);
escena.add(horseMalla2);
escena.add(horseMalla3);
escena.add(horseMalla4) ;
escena.add(reyMalla1);
escena.add(reyMalla2);

escena.add(iluminacion);
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth-100, window.innerHeight-100);
renderizador.shadowMapEnabled=true;
torreMalla1.castShadow=true;
base.receiveShadow=true;
iluminacion.castShadow=true;
document.body.appendChild(renderizador.domElement);
}
function loop(){
  function desplazar(objeto){
    var tecla = objeto.which;
        switch (tecla){
            case 37 :   
                torreMalla1.translateX(10);
                break;
            case 38 : 
                torreMalla1.translateZ(-10);
                break;
            case 39 :  
                torreMalla1.translateZ(10);
              
                break;
            case 40 : 
                torreMalla1.translateX(-10);
                break;
        default :alert("Pulse otra tecla");
        }
    }
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
}
setup();
loop();
