let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


//simplificar proceso de modificar un elemento HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function enfocarCuadroDeTexto(){
    document.getElementById("valorUsuario").focus()
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número. Lo lograste en el intento número ${intentos}`)
        document.getElementById("reiniciar").removeAttribute("disabled")

    } else if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento("p", "El número secreto es menor")
        intentos++;
        limpiarCaja();
        enfocarCuadroDeTexto();
    } else {
        asignarTextoElemento("p", "El número secreto es mayor")
        intentos++;
        limpiarCaja()
        enfocarCuadroDeTexto();
    } 
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);

    console.log(numeroGenerado)

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números")
        deshabilitarElementos("valorUsuario");
        deshabilitarElementos("noIntentar");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto()
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    let valorCaja = document.getElementById("valorUsuario").value = ""
}

function deshabilitarElementos(IdElemento){
    document.getElementById(IdElemento).setAttribute("disabled", "True")
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto")
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto()
    intentos = 1
    enfocarCuadroDeTexto();
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    deshabilitarElementos("reiniciar")
}

condicionesIniciales();