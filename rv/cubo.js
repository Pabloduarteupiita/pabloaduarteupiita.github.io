var forma= new THREE.Geometry();
forma.vertices.push(new THREE.Vector3(1,1,1));//0
forma.vertices.push(new THREE.Vector3(1,1,-1));//1
forma.vertices.push(new THREE.Vector3(1,-1,1));//2
forma.vertices.push(new THREE.Vector3(1,-1,-1));//3
forma.vertices.push(new THREE.Vector3(-1,1,1));//4
forma.vertices.push(new THREE.Vector3(-1,1,-1));//5
forma.vertices.push(new THREE.Vector3(-1,-1,1));//6
forma.vertices.push(new THREE.Vector3(-1,-1,-1));//7

forma.faces.push(new THREE.Face3(0,1,2)); //cara 0 ya der
forma.faces.push(new THREE.Face3(2,1,3)); //cara 1 ya der
forma.faces.push(new THREE.Face3(0,4,6)); //cara 2 ya izq
forma.faces.push(new THREE.Face3(6,2,0)); //cara 3 ya izq
//forma.faces.push(new THREE.Face3(4,0,1)); //cara 4 ya arr
//forma.faces.push(new THREE.Face3(4,1,5)); //cara 5 ya arr
//forma.faces.push(new THREE.Face3(2,3,7)); //cara 6 
//forma.faces.push(new THREE.Face3(2,5,7)); //cara 7
//forma.faces.push(new THREE.Face3(5,4,6)); //cara 10 ya fre
//forma.faces.push(new THREE.Face3(5,6,7)); //cara 11 ya fre

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
