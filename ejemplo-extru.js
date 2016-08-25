var material =new THREE.MeshNormalMaterial();

va malla= new THREE.Mesh(forma,material);
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=500;

var renderizador= new THREE.WebGLRender();
renderizador.setSize{window.innerHeight*.95,window.innerHeight*.95};
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
