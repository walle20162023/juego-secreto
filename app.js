//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Indica un numero del 1 al 10";
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
    console.log(numeroSecreto);
    //console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario=== numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero  en ${intentos} ${intentos === 1 ? "vez" : "veces" }`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");

        } else {
            asignarTextoElemento ("p", "EL numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo+1);   //no encesito usar let acá!
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {

    


        if (listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();
        } else {
           listaNumerosSorteados.push(numeroGenerado);
          return numeroGenerado;
        }
    }

}
function condicionesIniciales() {
    asignarTextoElemento("h1", "!Juego del numero secreto!");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo} `);    
    numeroSecreto = generarNumeroSecreto();
    intentos =  1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar menseja de intervalo de intentos
    //mensajesIniciales();
    //generar numero aleatorio
    //numeroSecreto = generarNumeroSecreto();
    //deshabilitar el boton de nuevo juego
    
    //inicializar le numero de intentos
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");


}
condicionesIniciales();

/*
function console() {
    alert("El botón fue clicado");

}
*/
//____________________________________________________________________________________________
/*
function promp() {
    let ciudad = prompt("Indica el nombre de alguna ciudad de Brasil.");
    alert(`Estuve en ${ciudad} y me acordé de ti`);

}
*/
//___________________________________________________________________________________________
/*
function Suma() {
    let numero1 = parseInt(prompt("Indica un numero: "));
    let numero2 = parseInt(prompt("Indica otro numero: "));
    let sum =numero1+numero2; 
    alert(sum);
}
*/
//______________________________________________________________________________________________
