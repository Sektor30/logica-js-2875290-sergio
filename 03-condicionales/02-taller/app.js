/* let nombreUsuario = prompt('¿Cual es tu nombre?').toLowerCase();
let edadUsuario = prompt('¿cual es tu edad?');
 */


/* 
if( edadUsuario >= 18   ){
    console.log('Puede ingresar a la discoteca')
}

else if(nombreUsuario === 'mario' && edadUsuario >= 18 ){
    console.log('Puede ingresar VIP')
}

else if (nombreUsuario === 'carlos' && edadUsuario >= 18){
    console.log('Puede ingresar VIP')
}

else{
    console.log('Eres menor de edad , No puede ingresar a la discoteca')
}
 */

//ANS ABOUT FIRST POINT (1)

/* if (edadUsuario >= 18 && (nombreUsuario === "mario" || nombreUsuario === "carlos")) {
    console.log(nombreUsuario + ", ingresa a la discoteca y tienes acceso VIP.");
} else if (edadUsuario >= 18) {
    console.log(nombreUsuario + ", puedes ingresar a la discoteca.");
} else {
    console.log(nombreUsuario + ", eres menor de edad. No puedes ingresar a la discoteca.");
} */

//ANS ABOUT SECOND POINT (2)
/* 
let userUno = prompt('jugemos piedra papel o tijera: dame una opcion del primer jugador').toLowerCase();
let userDos = prompt('y dame una opcion del segundo jugador').toLowerCase();

if (userUno === userDos) {
console.log ("Empate") ; document.write('Empate');
} else if (
    (userUno === "piedra" && userDos === "tijera") ||
    (userUno === "papel" && userDos === "piedra") ||
    (userUno === "tijera" && userDos === "papel")
) {
console.log ("¡Gana el jugador uno!" + userUno ) ; document.write( "¡Gana el jugador uno!" );
} else {
console.log ( "¡el jugador dos gana!" +  ) ; document.write( "¡el jugador dos gana!" );
} */


//ANS ABOUT third POINT (3)

/* let numero = prompt("Por favor, introduce un número:");

// Convertir el valor ingresado a un número entero
numero = parseInt(numero);

// Verificar si el número es divisible entre 2
if (numero % 2 === 0) {
    // Si es divisible, mostrar un mensaje indicando que lo es
    console.log(numero + " es divisible entre 2.");
} else {
    // Si no es divisible, mostrar un mensaje indicando que no lo es
    console.log(numero + " no es divisible entre 2.");
}
 */

// 4
/* 
// Solicita al usuario que introduzca un número
let numero = prompt("Introduce un número:");

// Convierte el valor introducido a un número entero
numero = parseInt(numero);

// Verifica si el número es par o impar
if (numero % 2 === 0) {
    alert("El número introducido es par.");
} else {
    alert("El número introducido es impar.");
} */



//5
/* let numero = prompt('escribe un numero');

numero = parseInt(numero);

if (numero  === 1000) {
    alert("Correcto!, ¡GANASTE!");
} else {
    alert("este es tu numero: " + numero + " ,lo sentimos, sigue participando.");
} 

 */


//6

/* let numeroUno = prompt('escribe el primer número');
let numeroDos = prompt('escribe el segundo número');

//respuesta

if (numeroUno < numeroDos){
    console.log("el numero uno es menor  que el numero dos")
}

 else if(  numeroDos <  numeroUno ){ 
    console.log("el numero dos es menor que el numero Uno")
}

else {
    console.log("Vuelve a intentarlo.")
}
 */






//7 
let numeroUno = prompt('ingresa primer numero');
let numeroDos = prompt('ingresa segundo numero ');
let numeroTres = prompt('ingresa tercer numero');


if (numeroUno === numeroDos && numeroUno === numeroTres ) || 
() ||
() {
console.log ("Empate") ; document.write('Empate');
} else if (
    (numeroUno > numeroDos) ||
    (numeroUno > numeroTres) ||
    
) {
console.log ("¡Gana el numeroUno uno!" + numeroUno ) ; 
} else {
console.log ( "¡el jugador dos gana!" +  ) 
 }











