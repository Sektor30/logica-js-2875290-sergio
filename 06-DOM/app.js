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

