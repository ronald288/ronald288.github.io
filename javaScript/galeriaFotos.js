document.addEventListener("DOMContentLoaded",()=>{
const eventoGaleria = document.querySelector(".Galeria");
eventoGaleria.addEventListener("click", crearGaleria);


function crearGaleria(){
    let fondoNegro = document.createElement("div");
    fondoNegro.classList.add("fondoGaleria");
    document.body.appendChild(fondoNegro);

    const contenedor = document.createElement("div");
    contenedor.classList.add("contenedorGaleria");
    fondoNegro.appendChild(contenedor);

    const contenedorMiniaturas = document.createElement("div");
    contenedorMiniaturas.classList.add("contenedorMiniaturas");
    contenedor.appendChild(contenedorMiniaturas);

    const botonCerrar = document.createElement("span");
    botonCerrar.classList.add("botonCerrar");
    botonCerrar.innerHTML = "&times;";
    contenedor.appendChild(botonCerrar);

    botonCerrar.addEventListener("click", () => {
    contenedor.remove();
    fondoNegro.remove();
    });

    fondoNegro.addEventListener("click",(e)=>{
         if(e.target == fondoNegro){
         fondoNegro.remove();
        }
    })

    const contenedorFotoPrincipal = document.createElement("div");
    contenedorFotoPrincipal.classList.add("fotoPrincipalGaleria");
    contenedor.appendChild(contenedorFotoPrincipal);

let fotoPrincipal = null;
const imagenes=['pic1.png','pic2.jpeg','pic3.mp4'];

for (let i = 0; i < imagenes.length; i++) {
  let nombreImagen = imagenes[i];
  let rutaImagen = "assets/img/images/" + nombreImagen;
  if (nombreImagen.endsWith('.mp4')) {
      const videoMiniatura = document.createElement('video');
      videoMiniatura.classList.add('videoMiniatura');
      videoMiniatura.poster="./assets/img/miniatura.png";
      contenedorMiniaturas.appendChild(videoMiniatura);

      // Agregar evento para cambiar la foto principal al hacer clic en el video
      videoMiniatura.addEventListener("click", () => {
          actualizarFormato(rutaImagen,'video');
      });
        } else {
          const imagenMiniatura = document.createElement("img");
          imagenMiniatura.setAttribute("src", rutaImagen);
          imagenMiniatura.classList.add('imagenesMiniatura');
          contenedorMiniaturas.appendChild(imagenMiniatura);

          // Agregar evento para cambiar la foto principal al hacer clic en la imagen
          imagenMiniatura.addEventListener("click", () => {
        actualizarFormato(rutaImagen,'img');
          });
      }
  }


  // Función para actualizar el elemento principal en la galería
  function actualizarFormato(src, tipo) {
    // Remover el elemento anterior si existe
    if (fotoPrincipal) {
        fotoPrincipal.remove();
    }

    if (tipo === 'video') {
        fotoPrincipal = document.createElement('video');
        fotoPrincipal.setAttribute('controls', '');
        fotoPrincipal.autoplay = "true";
    } else { // 'imagen'
        fotoPrincipal = document.createElement('img');
    }

    fotoPrincipal.setAttribute('src', src);
    fotoPrincipal.classList.add("fotoPrincipalGaleria");
    contenedorFotoPrincipal.appendChild(fotoPrincipal);
}
actualizarFormato("assets/img/images/" + imagenes[0], imagenes[0].endsWith('.mp4') ? 'video' : 'imagen');

}
});