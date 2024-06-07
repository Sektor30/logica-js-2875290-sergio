

const btnNumeros = document.querySelectorAll('.min');
const flotante =  document.querySelector('#flotante');
const cuadroOpacidad =document.querySelector('#cuadro');
const equis =document.querySelector('#equis');
const btnSiguiente =document.querySelector('#sig');
const btnAnterior =document.querySelector('#ant');
const imgPrincipal =document.querySelector('#imgprincipal');

//FUNCT
/* 
function lightbox (){
    flotante.style.top = '0vh';
    flotante.style.transitionDuration = '.5s';
    imgPrincipal.setAttribute('src','img2.jpg')

} 


function cerrar (){
    flotante.style.top = '-100vh';
    flotante.style.transitionDuration = '.5s';
}

 */

function lightbox (e){
    //console.log(e.target.src);
    let currentImg = e.target.src
    flotante.style.top = '0vh';
    flotante.style.transitionDuration = '.5s';
    imgPrincipal.setAttribute('src', currentImg)

} 


function cerrar (){
    flotante.style.top = '-100vh';
    flotante.style.transitionDuration = '.5s';
}


const lista = [
    'img1.jpg',
    'img2.jpg'
]

let estate = 0;

function showImage(index) {
    estate = index;
    imgPrincipal.setAttribute('src', lista[estate]);
}

function adv() {
        estate = (estate + 1 ) % lista.length;
        showImage(estate);
        console.log(estate)

}

function prev() {
    estate = (estate - 1 + lista.length) % lista.length;
    showImage(estate);
    console.log(estate)

}





// eventos

btnNumeros[0].addEventListener('click', lightbox)
btnNumeros[1].addEventListener('click', lightbox)
equis.addEventListener('click', cerrar);
cuadroOpacidad.addEventListener('click', cerrar)

btnSiguiente.addEventListener('click', adv )
btnAnterior.addEventListener('click', prev )


//PARA EL VIERNES REALIZAR CAMBIOS DE LAS FLECHAS