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
    flotante.style.height = "2500px" 
    flotante.style.transitionDuration = '.5s';
    imgPrincipal.setAttribute('src', currentImg)

} 


function cerrar (){
    flotante.style.top = '-300vh';
    flotante.style.transitionDuration = '.5s';
 
    
    
}


const lista = [
    './recursos/img/Frame001.png',
    './recursos/img/frame002.jpg',
    './recursos/img/frame003.jpg',

]

let estate = 0;

function showImage(estate) {
    imgPrincipal.setAttribute('src', lista[estate]);
    imgPrincipal.style.width="100%";
  

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