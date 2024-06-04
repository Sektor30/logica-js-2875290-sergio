const  pantalla = document.getElementById('title');
const  miBtn = document.getElementById('btn');


//crear el evento
miBtn.addEventListener('click', function (){
    pantalla.style.color = 'red'; //cambiar color
    pantalla.style.fontFamily = 'courier'; 
    pantalla.style.textShadow = '5px 5px black';
    pantalla.style.fontSize = '50px';
    pantalla.innerText = "EJECUTANDO SCRIPT ☠️";
        
})

/* const numero = document.getElementById('valor');
const uno = document.getElementById('uno');
const tres = document.getElementById('tres');

let i = 0;

function incrementar() {
    if (i < 20) {
        i++;
        numero.innerText = i;
    }
}
function disminuir() {
    if (i > 0) {
        i--;
        numero.innerText = i;
    }
}

uno.addEventListener('click', incrementar);
tres.addEventListener('click', disminuir);

*/
