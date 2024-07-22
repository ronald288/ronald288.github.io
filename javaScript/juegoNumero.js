let randomNumber = Math.floor(Math.random()*100)+1;

// se crean las variables donde se guarda informacion y se selecciona los elementos del html
const secuencia = document.querySelector(".secuencia");
const textoDeSalida = document.querySelector(".textoDeSalida");
const consejo = document.querySelector(".consejo");
const box = document.querySelector(".contenedor");

const numero = document.querySelector(".numero");
const enviar = document.querySelector(".enviar");

let contadorIntentos=1;
let botomReiniciarJuego;
numero.focus();

enviar.addEventListener('click', RevicionRespuesta);

function RevicionRespuesta(){

    // evalua el valor ingresado
    //Number se asegura que el valor sea definitivamente un numero

    let verificacion = Number(numero.value);
    if (contadorIntentos === 1){
        secuencia.textContent = "Intentos anteriores: ";
    }

    //muestra la secuencia de datos
   if (verificacion !== randomNumber)  secuencia.textContent += verificacion + ", "

    // comprueba si el numero ingresado corresponde al numero random
    if( verificacion === randomNumber){
        textoDeSalida.textContent = "¡Felicidades! ¡Lo adivinaste!";
        secuencia.textContent += verificacion + ". ";
        consejo.textContent="";
        //llamado a la funcion del fin del juego
        finJuego();
    }else if (contadorIntentos === 6){
        textoDeSalida.textContent = "¡¡¡Fin del juego!!!";
        consejo.textContent = "";
        finJuego();
    }else{
        textoDeSalida.textContent = "¡Incorrecto!";
            if(verificacion < randomNumber){
                consejo.textContent = "¡El número es muy bajo!";
            }else if(verificacion > randomNumber){
                consejo.textContent = "¡El número es muy alto!";
        }
    }

    contadorIntentos++;
    numero.value = '';
    numero.focus();
}

//desactiva la opcion de ingresar datos y aparece el boton de reinicio
function finJuego(){
    numero.disabled = true;
    enviar.disabled = true;
    botomReiniciarJuego = document.createElement("button");
    botomReiniciarJuego.textContent="iniciar nuevo juego";
    botomReiniciarJuego.setAttribute("class","juegoNuevo");
    box.appendChild(botomReiniciarJuego);
    botomReiniciarJuego.addEventListener('click', reiniciarJuego);
}

function reiniciarJuego(){

    // limpia todos los parrafos 
    contadorIntentos = 1;
    const borrador = document.querySelectorAll (".resultados p");
    for (let i=0 ; i < borrador.length ; i++){
        borrador[i].textContent = "";
    }

    botomReiniciarJuego.parentNode.removeChild(botomReiniciarJuego);

    // vuelve a activar los campos de datos y crea un nuevo numero
    numero.disabled = false;
    enviar.disabled = false;
    numero.value = '';
    numero.focus();
    randomNumber = Math.floor(Math.random()*100)+1;
}



