document.addEventListener("DOMContentLoaded",()=>{
const eventoGaleria = document.querySelector(".Galeria");
eventoGaleria.addEventListener("click", crearGaleria);


function crearGaleria(){
    var fondoNegro = document.createElement("div");
    fondoNegro.style.backgroundColor ="rgba(0,0,0,0.7)";
    fondoNegro.style.width = window.innerWidth+"px";
    fondoNegro.style.height = "335vh";
    fondoNegro.style.position="absolute";
    fondoNegro.style.top = 0;
    document.body.appendChild(fondoNegro);

    const contenedor = document.createElement("div");
    contenedor.classList.add("contenedorGaleria");
    document.body.appendChild(contenedor);

    const contenedorMiniaturas = document.createElement("div");
    contenedorMiniaturas.classList.add("contenedorMiniaturas");
    contenedor.appendChild(contenedorMiniaturas);

    const botonCerrar = document.createElement("button");
    botonCerrar.classList.add("botonCerrar");
    botonCerrar.textContent = "X";
    contenedor.appendChild(botonCerrar);

    botonCerrar.addEventListener("click", () => {
    contenedor.remove();
    fondoNegro.remove();
    });

    const contenedorFotoPrincipal = document.createElement("div");
    contenedorFotoPrincipal.classList.add("fotoPrincipalGaleria");
    contenedor.appendChild(contenedorFotoPrincipal);

let fotoPrincipal = null;
const imagenes=['pic1.png','pic2.jpeg','pic3.mp4'];

for (let i = 0; i < imagenes.length; i++) {
  let nombreImagen = imagenes[i];
  let rutaImagen = "assets/img/images/" + nombreImagen;
  if (nombreImagen.endsWith('.mp4')) {
      const videoMiniatura = document.createElement("video");
      videoMiniatura.setAttribute("src", rutaImagen);
      videoMiniatura.setAttribute("controls", true);
      videoMiniatura.classList.add('videoMiniatura');
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