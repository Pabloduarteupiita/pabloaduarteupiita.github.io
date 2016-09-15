//var cubo1Forma(i,j)= new THREE.BoxGeometry(1,1,1);
//var cubo2Forma= new THREE.BoxGeometry(1,1,1);

var size = 8, step = 1;
var geometry = new THREE.Geometry();

				for ( var i = - size; i <= size; i += step ) {

					geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
					geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

					geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
					geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

				}

var material = new THREE.LineBasicMaterial( { color: 0xffffff} );
var line = new THREE.Mesh( geometry, material );
var scene= new THREE.Scene();
scene.add( line );

//var material1 = new THREE.MeshBasicMaterial({color: 0xffffff});
//var material2 = new THREE.MeshBasicMaterial({color: 0x808080});

//var cube1 = new THREE.Mesh( geometry, material1 );
//var cube2 = new THREE.Mesh( cubo2Forma, material2 );

//cubo1Forma.translate(0,0,0);
//cubo2Forma.translate(1,0,0);

//var escena= new THREE.Scene();
//escena.add(cube1);
//escena.add(cube2);

//var camara= new THREE.PerspectiveCamera();
//camara.position.z=5;
var camara= new THREE.PerspectiveCamera();

camara.position.y=2;
camara.position.z=8;
				
renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(scene,camara)
