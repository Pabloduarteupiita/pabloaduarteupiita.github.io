var forma= new THREE.Geometry();
forma.vertices.push(new THREE.Vector3(1,1,1));
forma.vertices.push(new THREE.Vector3(1,1,-1));
forma.vertices.push(new THREE.Vector3(1,-1,1));
forma.vertices.push(new THREE.Vector3(1,-1,-1));
forma.vertices.push(new THREE.Vector3(-1,1,1));
forma.vertices.push(new THREE.Vector3(-1,1,-1));
forma.vertices.push(new THREE.Vector3(-1,-1,1));
forma.vertices.push(new THREE.Vector3(-1,-1,-1));

forma.faces.push(new THREE.Face3(1,2,3)); //cara 0
forma.faces.push(new THREE.Face3(1,2,5)); //cara 1
forma.faces.push(new THREE.Face3(1,3,7)); //cara 2
forma.faces.push(new THREE.Face3(3,4,8)); //cara 3
forma.faces.push(new THREE.Face3(7,5,6)); //cara 4
forma.faces.push(new THREE.Face3(4,8,6)); //cara 5
forma.faces.push(new THREE.Face3(4,8,6)); //cara 6
forma.faces.push(new THREE.Face3(4,8,6)); //cara 7

forma.computeBoundingSphere();
forma.computeFaceNormals();

var material= new THREE.MeshNormalMaterial();
var malla= new THREE.Mesh(forma,material);

malla.rotateX(Math.PI/4);

var escena= new THREE.Scene();
escena.add(malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=5

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95)

document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
