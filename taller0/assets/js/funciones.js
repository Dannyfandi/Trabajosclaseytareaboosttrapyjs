// Tarea calculadora:
let num1= parseInt(prompt("digite el primer número"))
let num2= parseInt(prompt("digite el segundo número"))

function sumar (num1, num2){
    let suma =  num1 + num2;
    return console.log(`la suma de ${num1} y ${num2} es ${suma}`);
}
function resta (num1, num2){
    let resta =  num1 - num2;
    return console.log(`la resta de ${num1} y ${num2} es ${resta}`);
}
function multiplicacion (num1, num2){
    let multiplicacion =  num1 * num2;
    return console.log(`la multiplicación entre ${num1} y ${num2} es ${multiplicacion}`);
}
function division (num1, num2){
    let division =  num1 / num2;
    return console.log(`la división entre ${num1} y ${num2} es ${division}`);
}
function potencia(num1, num2){
    let potencia = num1;
    let resultado = num1;
    for (var i = 0; i < num2; i++) {
          resultado = resultado * potencia;
      }
    return console.log(`${num1} elevado a ${num2} es ${resultado}`)
}
sumar(num1, num2);
resta(num1,num2);
multiplicacion(num1, num2);
division(num1, num2);
potencia(num1, num2);

/* 
// declaracion sin parametros

function lanzarmoneda() {
    let moneda = Math.floor((Math.random()*2)+1);
    console.log (`El lanzamiento fue ${moneda}`);
    return moneda;
}

// invocar funcion x declaracion

console.log (`El lanzamiento fue ${lanzarmoneda()}`);
let lanzamiento = lanzarmoneda();
    console.log (`El lanzamiento fue ${lanzamiento}`);

//declaracion con parametros    

function ganar (saldo, apuesta) {
    saldo = saldo+(apuesta*2);
    return saldo;
}

function perder (saldo, apuesta) {
    saldo = saldo-apuesta;
    return saldo;
}

//invocar la funcion y enviar argumentos segun corresponda

ganar (saldo, apuesta);
perder (saldo, apuesta);

//expresion

let lanzar = function lanzarmoneda() {
    let moneda = Math.floor ((Math.random() * 2) + 1);
    return moneda;
}

let lanzamiento2 = lanzar();

let ganar = function ganar(saldo, apuesta) {
    saldo = saldo + (apuesta*2);
    return saldo;
}

let gana = ganar (saldo, apuesta);

//flecha (arrow)

let perder = (saldo, apuesta)=>{
    saldo = saldo-apuesta;
    return saldo;
}

//anonima

let ganar = function (saldo, apuesta) {
    saldo = saldo + (apuesta*2);
    return saldo;
} */

//Funcion de lanzar moneda, luego escoger cara o sello, comparar

function lanzarmoneda() {
    let moneda = Math.floor((Math.random()*2)+1);
    return moneda;
}

function ganaroperder(ladomoneda, moneda, apuesta, saldo) {
    saldo = saldo - apuesta;
    if (ladomoneda == moneda) {
        saldo = saldo + (apuesta*2);
        console.log (`¡Ganaste! tu nuevo saldo es: ${saldo}`);
        return saldo;
    }
    else {
        console.log (`¡Perdiste! tu nuevo saldo es: ${saldo}`);
        return saldo;
    }
}

let apostar = parseInt(prompt("¿Quieres apostar? (1=si, 0=no)"));
let saldo = parseInt(prompt("Digite el saldo disponible"));

while (apostar == 1){
    let apuesta = parseInt(prompt("Digita cuanto quieres apostar"));
    let ladomoneda = parseInt(prompt("Digite si va por Cara (1) o Sello (2)"));
    let moneda = lanzarmoneda();
    saldo = ganaroperder(ladomoneda, moneda, apuesta, saldo);
    apostar = parseInt(prompt("¿Quieres seguir apostando? (1=si, 0=no)"));
}