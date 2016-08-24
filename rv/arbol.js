var escena = new THREE.Scene();


var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild (renderizador.domElement);

var forma = new THREE.CircleGeometry( 1, 64 );
var material = new THREE.MeshNormalMaterial(); 
var circulo = new THREE.Mesh(forma, material);
escena.add(circulo);

//var forma1 = new THREE.BoxGeometry( 1, 2 );
//var material1 = new THREE.MeshNormalMaterial();
//var cube = new THREE.Mesh( forma1, material1 );
//escena.add(cube);

renderizador.render(escena,camara);

