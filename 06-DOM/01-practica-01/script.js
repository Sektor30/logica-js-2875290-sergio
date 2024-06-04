// ejercicio 1

const miInput = document.getElementById("boton");

function cambiarValue (){
    console.log(miInput.value)
    miInput.value = 'lanzamiento exitoso! 😺'
}

miInput.addEventListener('click', cambiarValue)

const cajaColor = document.getElementById('caja');
const botonesColores = document.querySelectorAll('.btnColores');

console.log(cajaColor)
console.log(botonesColores)

function pintarCaja(e){
    console.log(e);
    console.log(e.target.getAttribute('data-color'))
    let newColor = e.target.getAttribute('data-color');
    cajaColor.style.backgroundColor = newColor;
}


botonesColores[0].addEventListener('click',pintarCaja);
botonesColores[1].addEventListener('click',pintarCaja);
botonesColores[2].addEventListener('click',pintarCaja);
botonesColores[3].addEventListener('click',pintarCaja);

//MOVER PELOTA

//1 VARIABLES

const pelota = document.querySelector("#circulo");
const btnMover = document.querySelector('#btnMover')


console.log(pelota);
console.log(btnMover);

// 2  funciones 
/* function mover(){
    pelota.style.marginLeft ='400px';
    pelota.style.backgroundColor ='green';
    pelota.style.transitionDuration ='.5s';
    
} */

let e = 0;

function mover(){

    if( e===0) {
        pelota.style.marginLeft ='400px';
        pelota.style.backgroundColor ='#E32636';
        pelota.style.transitionDuration ='.1s';
        e=1;
    }else {
        console.log(e);
        pelota.style.marginLeft ='0px';
        pelota.style.backgroundColor ='#2e2e2e';
        pelota.style.transitionDuration ='.1s';
        e=0;
    }

}

btnMover.addEventListener('click', mover)


// CAMBIAR IMAGEN

const pantallaImg = document.querySelector('#miImagen');
const btnCambiar = document.querySelector('#btnCambiar');


let esatado = 0;

 /* function cambiarImagen(){
    pantallaImg.setAttribute('src', 'imagen2.jpg')

} */
 
function cambiarImagen(){

    if( e===0) {
        pantallaImg.setAttribute('src', 'imagen2.jpg')
        e=1;
    }else {
        pantallaImg.setAttribute('src', 'imagen.png')
        e=0;
    }


 }


btnCambiar.addEventListener('click', cambiarImagen)