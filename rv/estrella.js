var figura = new THREE.Shape(); //para figura es el constructor shape
//figura.moveTo(10,0); //mover a coordenada 10x 10y
figura.lineTo(20,20); // hacer linea en coordenadas 10x 40x 
figura.lineTo(40,0);
figura.lineTo(30,20);
figura.lineTo(40,50);/////////
figura.lineTo(30,50);
figura.lineTo(20,60);
figura.lineTo(10,50);
figura.lineTo(0,50);
figura.lineTo(10,20);
figura.lineTo(0,0);

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);

var escena = new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=100;
var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
