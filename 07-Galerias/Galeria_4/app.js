
/* const pantalla = document.getElementsByTagName("img") [0]; */

/* const parrafo = document.getElementsByTagName("p")[0]; */
const pantalla = document.getElementsByClassName("imagenMario") [0] ;
const miniaturas = document.getElementsByClassName("miniatura");

function cambiar (){
    var atributo = this.getAttribute("src");

    var titulo = this.getAttribute("name");

   /*  parrafo.innerHTML = titulo; */

    pantalla.setAttribute("src", atributo)

}

miniaturas[0].addEventListener("click", cambiar)
miniaturas[1].addEventListener("click", cambiar)
miniaturas[2].addEventListener("click", cambiar)
miniaturas[3].addEventListener("click", cambiar)