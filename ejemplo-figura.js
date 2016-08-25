var figura = new THREE.Shape(); //para figura es el constructor shape
figura.moveTo(10,10); //mover a coordenada 10x 10y
figura.lineto(10,40) // hacer linea en coordenadas 10x 40x 
figura.lineto(40,40)
figura.lineto(10,10)

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);

var escena = new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera()>;
camara.position.z=100:
var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, windows.innerHeight*.95);

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

