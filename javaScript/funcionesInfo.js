const herramientas = [
    {selector:".HTML", descripcion: "HTML, acrónimo en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado utilizado en la creación de páginas web. Este estándar que sirve de referencia del software que interactúa con la elaboración de páginas web en sus diferentes versiones.", claseInfo:"infoHerramientasHtml" },
    {selector:".CSS", descripcion: "CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.", claseInfo:"infoHerramientasCss" },
    {selector:".JAVASCRIPT", descripcion: "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.", claseInfo:"infoHerramientasJavaScript" },
    {selector:".PHOTOSHOP", descripcion: "Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos, su nombre en español significa 'tienda de fotos'. Es conocido mundialmente.", claseInfo:"infoHerramientasPhotoshop" },
    {selector:".STARUML", descripcion: "StarUML es un modelador de software sofisticado destinado a respaldar un modelado ágil y conciso. Es una herramienta de modelado de software multiplataforma que admite múltiples lenguajes y funciones, como generación, validación, extensión y personalización de código.", claseInfo:"infoHerramientasStarUml" }
];

// esta funcion crear los botones de abrir la informacion
function crearBotonInformacion(){
    const botonInformacion = document.createElement("button");
    botonInformacion.classList.add("informacion");
    return botonInformacion;
}

// esta funcion crea las cajas que llevaran la descripcion y agrega el boton de cerrar
//ademas se desactiva el boton de informacion (se pasa el elemento por medio de un parametro)
function crearCuadroInformacion(descripcion,claseInfo,contenedor,botonInformacion) {
  const cuadroInfo = document.createElement("div");
  const texto = document.createElement("p");
//aqui se envian los atributos que se necesitan para q funcione el evento del boton de cerrar
  const botonCerrarDialogo = botonDeCerrar(cuadroInfo,botonInformacion);

  cuadroInfo.classList.add(claseInfo);
  texto.textContent = descripcion;

  cuadroInfo.appendChild(texto);
  cuadroInfo.appendChild(botonCerrarDialogo);
  contenedor.appendChild(cuadroInfo);
  botonInformacion.disabled=true;
}

// esta funcion crear los botones de cerrar los cuadros de informacion.
function botonDeCerrar(cuadroInfo,botonInformacion) {
  const botonCerrar = document.createElement("button");
  botonCerrar.innerHTML = "X";
  botonCerrar.classList.add("botonCerrar");

// cuando le de click encima del botonCerrar se cierre el cuadro de dialogo y se habilite el boton de informacion
// se utiliza esta funcion en el evento para obtener los dos atributos
   botonCerrar.addEventListener("click", () => cerrarCuadroInformacion(cuadroInfo, botonInformacion));
   return botonCerrar;
 }

 // aqui se cierra el cuadro y se activa el boton de informacion
   function cerrarCuadroInformacion(cuadroInfo, botonInformacion) {
    cuadroInfo.parentNode.removeChild(cuadroInfo);
    botonInformacion.disabled = false;
 }

// recorre cada objeto que esta detro del array herramientas
  herramientas.forEach(herramienta =>{
    const boxHerramienta = document.querySelector(herramienta.selector);
    const botonInformacion = crearBotonInformacion();
  
    boxHerramienta.appendChild(botonInformacion);
    botonInformacion.addEventListener("click", () => {
     crearCuadroInformacion(herramienta.descripcion, herramienta.claseInfo, boxHerramienta, botonInformacion);
     });
  });