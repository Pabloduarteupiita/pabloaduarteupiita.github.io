var figura = new THREE.Shape(); //para figura es el constructor shape
//figura.moveTo(10,0); //mover a coordenada 10x 10y
figura.lineTo(20,15); // hacer linea en coordenadas 10x 40x 1
figura.lineTo(40,0); //2
figura.lineTo(30,20);//3
figura.lineTo(40,30);/////////4
figura.lineTo(30,30);//5
figura.lineTo(20,40);//6
figura.lineTo(5,30);//7
figura.lineTo(0,30);//8
figura.lineTo(10,20);//9
figura.lineTo(0,0);//10

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
