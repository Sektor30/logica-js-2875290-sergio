
/* BOTON DE INICIO DE SESION */

const miboton = document.getElementById('btn');
const flotante = document.querySelector('#flotante');
const cuadroOpacidad =document.querySelector('#cuadro');
const equis =document.querySelector('#equis');
const btnSiguiente =document.querySelector('#sig');
const btnAnterior =document.querySelector('#ant');
const imgPrincipal =document.querySelector('#imgprincipal');



function lightbox (e){
    //console.log(e.target.src);
    let currentImg = e.target.src
    flotante.style.top = '0vh';
    flotante.style.transitionDuration = '.5s';
    imgPrincipal.setAttribute('src', './recursos/img/frame008.png')

} 

function cerrar (){
    flotante.style.top = '-100vh';
    flotante.style.transitionDuration = '.5s';
}


// eventos

miboton.addEventListener('click', lightbox)
equis.addEventListener('click', cerrar);
cuadroOpacidad.addEventListener('click', cerrar)



