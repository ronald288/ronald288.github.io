document.addEventListener('DOMContentLoaded',()=>{
    const cartas = new Array(
       {nombre:'1', seleccion:false},
       {nombre:'2', seleccion:false},
       {nombre:'3', seleccion:false},
       {nombre:'4', seleccion:false},
       {nombre:'5', seleccion:false},
       {nombre:'6', seleccion:false},
       {nombre:'7', seleccion:false},
       {nombre:'8', seleccion:false},
       {nombre:'1', seleccion:false},
       {nombre:'2', seleccion:false},
       {nombre:'3', seleccion:false},
       {nombre:'4', seleccion:false},
       {nombre:'5', seleccion:false},
       {nombre:'6', seleccion:false},
       {nombre:'7', seleccion:false},
       {nombre:'8', seleccion:false},
   )

   let numFichas =17;
   /*estas variables sirven para comparar las cartas seleccionadas y aplicar los diseños
   a las dos cartas*/
   let jugada1='';
   let jugada2 = '';
   let identificador1 = ''
   let identificador2 = '';
   let bloqueoGiro=false; // Variable de bloqueo para el giro de cartas
   
   barajarCartas();
   
   for(let i=1; i<numFichas; i++){
      document.getElementById(i.toString()).addEventListener('click',girarCarta);
   };   

   function girarCarta(evento){
       if (bloqueoGiro) return; // Si está bloqueado, salir sin hacer nada
       let jugada= evento.target.dataset.valor;
       id= evento.target.id;
   
       //seleccion de la primera carta
       if(!jugada1){
           cambiaColor(id,"rgba(254, 254, 254, 0.872)",jugada);
           jugada1=jugada;
           identificador1=id;
       }
   
       //seleccion de la segunda carta
       // este condicional permite que no se seleccione la misma carta
       else if(identificador1 !== id){
           jugada2=jugada;
           identificador2=id;
           cambiaColor(id,"rgba(254, 254, 254, 0.872)",jugada);
           bloqueoGiro = true; // Bloquear más giros
   
           //encuentra la carta semejante
           if(jugada1 === jugada2 &&
           cartas[parseInt(identificador2)-1].seleccion != true &&
           cartas[parseInt(identificador1)-1].seleccion != true
           ){
            cambiaColor(identificador2,"rgba(0, 0, 0, 0.099)",jugada2);
            cambiaColor(identificador1,"rgba(0, 0, 0, 0.099)",jugada1);
            cartas[parseInt(identificador2)-1].seleccion= true;
            cartas[parseInt(identificador1)-1].seleccion= true;
            document.getElementById(identificador2.toString()).removeEventListener('click', girarCarta);
            document.getElementById(identificador1.toString()).removeEventListener('click', girarCarta);
           limpiarVariables();
           bloqueoGiro = false; // Desbloquear después de terminar el timeout
           }
   
           // la carta no es semejante
           else{
               setTimeout(()=>
               {
                   cambiaColor(identificador2,"rgba(254, 254, 254, 0.872)","?");
                   cambiaColor(identificador1,"rgba(254, 254, 254, 0.872)","?");
                   limpiarVariables();
                   bloqueoGiro = false; // Desbloquear después de terminar el timeout
              },500)
           }
       }
       verificar();
   };
       
   function cambiaColor(posicion,color,dato){
       const elemento = document.getElementById(posicion);
       elemento.style.backgroundColor = color;
       elemento.innerHTML = dato;
   }
   
   function barajarCartas(){
       cartas.sort(()=>Math.random()-0.5);
       asignarDatos();
       }
   
   function asignarDatos(){
       for(let i=0; i<16; i++){
           var carta= cartas[i].nombre;
           document.getElementById((i+1).toString()).dataset.valor = carta;
       }};
       
   function limpiarVariables(){
       jugada1 = jugada2 = "";
       identificador1 = identificador2 = "";
   }
   
   function verificar(){
       var aciertos  = 0;
       for(var i= 0; i<16; i++){
       if(cartas[i].seleccion==true)aciertos++;
       }
           if(aciertos==16){
            reiniciarJuego();
            aciertos=0;
           }
   }
   
   function reiniciarJuego(){
    const outset = document.createElement("div");
    let texto = document.createElement("p")
    const reinicio= document.createElement("button");

    outset.classList.add("container-finish");
    texto.classList.add("text-finish");
    reinicio.setAttribute("class","reinicio");

    texto.innerHTML="!FELICIDADES!, Juego terminado";
    reinicio.innerHTML='reiniciar juego';

    document.body.appendChild(outset);
    outset.appendChild(texto);
    outset.appendChild(reinicio);



       reinicio.addEventListener('click',()=>{
        outset.remove();
        for(let i=1; i<numFichas; i++){
           let elementos = document.getElementById(i.toString())
           cartas[i-1].seleccion = false;
           cambiaColor(i,"rgba(254, 254, 254, 0.872)","?")
           elementos.addEventListener('click',girarCarta);
        }
        reinicio.parentNode.removeChild(reinicio);
        barajarCartas();

    });
   }
});