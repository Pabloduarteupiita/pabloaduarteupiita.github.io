var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
document.body.appendChild (renderizador.domElement);
var forma = new THREE.CircleGeometry( 100, 64 );
var material = new THREE.MeshNormalMaterial(); 
var circulo = new THREE.Mesh(forma, material);
escena.add(circulo);
circulo.positionX(10000); 
circulo.positionY(10000); 
renderizador.render(escena,camara);
