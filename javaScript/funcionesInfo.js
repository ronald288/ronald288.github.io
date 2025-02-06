document.addEventListener("DOMContentLoaded",()=>{

  let iconoCreado = false;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100 && !iconoCreado) {
      let nuevoIcono = document.createElement('button');
      nuevoIcono.innerHTML = '<i class="fa-solid fa-house"></i>';
      nuevoIcono.classList.add('fixed');  // Usamos las mismas clases para el estilo
      document.body.appendChild(nuevoIcono);

      nuevoIcono.addEventListener("click", function () {
        window.scrollTo(0, 0); // Desplaza la página al inicio
      });
      
      iconoCreado = true;
    } 
    else if (window.scrollY <= 100 && iconoCreado) {
    let nuevoIcono = document.querySelector('.fixed');
    if (nuevoIcono) {
      nuevoIcono.remove(); // Eliminar el ícono
      iconoCreado = false; // Restablecer el estado de creación
    }
  }
  });


const containers = document.querySelectorAll(".herramienta");
const textInfomation= document.querySelector(".textInformation")
const herramientas = [
    {selector:".HTML", descripcion: "HTML, acrónimo en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado utilizado en la creación de páginas web. Este estándar que sirve de referencia del software que interactúa con la elaboración de páginas web en sus diferentes versiones."},
    {selector:".CSS", descripcion: "CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado."},
    {selector:".JAVASCRIPT", descripcion: "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico."}
];

// esta funcion crear los botones de abrir la informacion
containers.forEach((valor)=> {
  valor.appendChild(crearBotonInformacion(valor.className));
});

function crearBotonInformacion(clase){
    const botonInformacion = document.createElement("button");
    botonInformacion.classList.add("informacion");
    //dataset reasignar el valor de la clase a los botones
    botonInformacion.dataset.clase = clase;
    botonInformacion.addEventListener('click',crearCuadroInformacion);
    return botonInformacion
}

function crearCuadroInformacion(e) {
  const clase= e.target.dataset.clase;
  const herramienta = herramientas.find(h => clase.includes(h.selector.slice(1)));
  if(clase === "herramienta HTML")textInfomation.style.border = "1px solid #ff7801";
  else if(clase === "herramienta CSS")textInfomation.style.border = "1px solid #0145ff"
  else textInfomation.style.border = "1px solid #f7ff01"
  
  if (herramienta) {
    textInfomation.style.display = "block";
    textInfomation.innerHTML = herramienta.descripcion;
    textInfomation.appendChild(botonDeCerrar());
}
}


// esta funcion crear los botones de cerrar los cuadros de informacion.
function botonDeCerrar() {
  const botonCerrar = document.createElement("span");
  botonCerrar.innerHTML = "&times;";
  botonCerrar.classList.add("botonCerrar");
  botonCerrar.addEventListener("click", () =>{
    textInfomation.style.display='none';
    textInfomation.innerHTML="";
});
   return botonCerrar;
 }
});