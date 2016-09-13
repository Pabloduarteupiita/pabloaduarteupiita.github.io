var iluminacion= new THREE.PointLight(0xFFFFFF);
iluminacion.position.y=20;

var forma=     new THREE.SphereGeometry(1);
var material=  new THREE.MeshLambertmaterial({color:"#00cc00"});
var malla=     new THREE.Mesh(forma,material);

var base= new THREE.Mesh(new THREE.BoxGeometry(5,.1,5)), new THREE.MeshLambertMaterial({color>: 0xFFFFFF});

var escena= new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(iluminacion);

var camara= new THREE.PerspectiveCamera();
camara.position.z=15;
camara.position.z=5;

var lienzo= document.getElementById("LuzSinSombras");
var renderizador= new THREE.WebGLRenderer({canvas;lienzo,antialias:True});
renderizador.setSize(600,600);
renderizador.render(escena,camara);

