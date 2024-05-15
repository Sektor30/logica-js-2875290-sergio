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
}