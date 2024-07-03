
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
    imgPrincipal.setAttribute('src', './recursos/img/frame009.png')

} 

function cerrar (){
    flotante.style.top = '-100vh';
    flotante.style.transitionDuration = '.5s';
}


// eventos

miboton.addEventListener('click', lightbox)
equis.addEventListener('click', cerrar);
cuadroOpacidad.addEventListener('click', cerrar)



/* BOTON DE REGISTRO */

const mibotondos = document.getElementById('btndos');
const flotantedos = document.querySelector('#flotantedos');
const cuadroOpacidaddos =document.querySelector('#cuadrodos');
const equisdos =document.querySelector('#equisdos');
const imgPrincipaldos =document.querySelector('#imgprincipaldos');



function lightboxdos(e){
    //console.log(e.target.src);
    let currentImg = e.target.src
    flotantedos.style.top = '0vh';
    flotantedos.style.transitionDuration = '.5s';
    imgPrincipaldos.setAttribute('src', './recursos/img/frame008.png')

} 

function cerrardos (){
    flotantedos.style.top = '-100vh';
    flotantedos.style.transitionDuration = '.5s';
}


// eventos

mibotondos.addEventListener('click', lightboxdos)
equisdos.addEventListener('click', cerrardos);
cuadroOpacidaddos.addEventListener('click', cerrardos)
