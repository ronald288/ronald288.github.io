const eventoGaleria= document.querySelector(".section1-head__img");
eventoGaleria.addEventListener("click",crearGaleria);

function crearGaleria(){
const contenedor= document.createElement("div");
contenedor.classList.add("contenedorGaleria");
document.body.appendChild(contenedor);

const contenedorMiniaturas= document.createElement("div");
contenedorMiniaturas.classList.add("contenedorMiniaturas");
contenedor.appendChild(contenedorMiniaturas);

const botonCerrar= document.createElement("botton");
botonCerrar.classList.add("botonCerrar");
botonCerrar.textContent="X";
contenedor.appendChild(botonCerrar);

botonCerrar.addEventListener("click",()=>{
contenedor.remove();
});

const contenedorMiniatura = document.querySelector(".contenedorMiniaturas");
const contenedorFotoPrincipal = document.querySelector(".contenedorGaleria");

const imagenes=['pic1.png','pic2.jpeg','pic3.jpg','pic4.jpg'];

for(i=0; i<imagenes.length; i++){
    let nombreImagenes = imagenes[i];
    let rutaImagenes = "assets/img/images/"+ nombreImagenes;
    const imagenesMiniatura= document.createElement("img");
    imagenesMiniatura.setAttribute('src',rutaImagenes);
    imagenesMiniatura.classList.add('imagenesMiniatura');
    contenedorMiniatura.appendChild(imagenesMiniatura);
};

contenedorMiniatura.addEventListener("click", (event) => {
    if (event.target.tagName === 'IMG') {
      fotoPrincipal.src = event.target.src;
    }
});

const fotoPrincipal= document.createElement('img');
fotoPrincipal.setAttribute('src',"assets/img/images/pic1.png");
fotoPrincipal.setAttribute('class',"fotoPrincipalGaleria");
contenedorFotoPrincipal.appendChild(fotoPrincipal);

};