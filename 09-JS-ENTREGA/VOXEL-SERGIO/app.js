const btnNumeros = document.querySelectorAll('.min');
const flotante =  document.querySelector('#flotante');
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
    imgPrincipal.setAttribute('src', currentImg)

} 


function cerrar (){
    flotante.style.top = '-450vh';
    flotante.style.transitionDuration = '.5s';
}


const lista = [
    'https://github.com/Sektor30/logica-js-2875290/blob/main/08-lightbox/img1.jpg?raw=true',
    'https://github.com/Sektor30/logica-js-2875290/blob/main/08-lightbox/img2.jpg?raw=true',
    'https://github.com/Sektor30/logica-js-2875290-sergio/blob/main/07-Galerias/Galeria_5/img2.jpg?raw=true',

]

let estate = 0;

function showImage(estate) {
    imgPrincipal.setAttribute('src', lista[estate]);
}

function adv() {
        estate = (estate + 1 ) % lista.length;
        showImage(estate);
        console.log(estate);
        btnAnterior.disable = false;
        

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