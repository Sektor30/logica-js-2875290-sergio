

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

/*
const lista = [
    'img1.jpg',
    'img2.jpg',
    'https://github.com/Sektor30/logica-js-2875290-sergio/blob/main/07-Galerias/Galeria_5/img2.jpg?raw=true',

]

 let estate = 0;

function showImage(index) {
    estate = index;
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

} */


    function siguiente() {
        imgPrincipal.src="img2.jpg"
        imgPrincipal.setAttribute('src', "img2.jpg")

    }

    function anterior (){
        imgPrincipal.src ="img1.jpg"
    }



// eventos

btnNumeros[0].addEventListener('click', lightbox)
btnNumeros[1].addEventListener('click', lightbox)
equis.addEventListener('click', cerrar);
cuadroOpacidad.addEventListener('click', cerrar)

btnSiguiente.addEventListener('click', siguiente )
btnAnterior.addEventListener('click', anterior )


//PARA EL VIERNES REALIZAR CAMBIOS DE LAS FLECHAS