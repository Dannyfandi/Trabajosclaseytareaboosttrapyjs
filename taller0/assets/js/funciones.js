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
function modulo(num1, num2){
    let modulo = num1%num2;
    return console.log(`el módulo entre ${num1} y ${num2} es ${modulo}`)
}
sumar(num1, num2);
resta(num1,num2);
multiplicacion(num1, num2);
division(num1, num2);
modulo(num1, num2);