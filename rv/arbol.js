var escena = new THREE.Scene();

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                    	window.innerHeight*.95);
document.body.appendChild (renderizador.domElement);
var forma = new THREE.CircleGeometry( 1, 64 );
var material = new THREE.MeshNormalMaterial(); 
var circulo = new THREE.Mesh(forma, material);
escena.add(circulo);

var geometry = new THREE.BoxGeometry( 1, 3 );
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

renderizador.render(escena,camara);
