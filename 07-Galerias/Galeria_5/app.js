

var img = document.getElementsByTagName("img")[0]
var btn = document.getElementsByClassName("btn");

var txt1 = document.getElementsByTagName("h1")[0];
var txt2 = document.getElementsByTagName("p")[0];

function cambio1 (){
    img.setAttribute("src", "img1.jpg");
    txt1.innerHTML = "Imagen 1";
    txt2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam temporibus, velit earum laborum officia quasi adipisci non porro doloribus molestiae fugit quo animi! Eveniet labore, iste distinctio placeat illum et.";

}

function cambio2 (){
    img.setAttribute("src", "img2.jpg");
    txt1.innerHTML = "Imagen 2";
    txt2.innerHTML = "Soluta dolore atque natus aperiam error eum? Blanditiis ratione id officia dolores iure similique necessitatibus voluptatem officiis accusantium! Sit sed ipsum obcaecati praesentium. Dicta ipsum nostrum laborum corrupti officiis deserunt.";

}

function cambio3 (){
    img.setAttribute("src", "img3.jpg");
    txt1.innerHTML = "Imagen 3";
    txt2.innerHTML = "Soluta dolore atque natus aperiam error eum? Blanditiis ratione id officia dolores iure similique necessitatibus voluptatem officiis accusantium! Sit sed ipsum obcaecati praesentium. Dicta ipsum nostrum laborum corrupti officiis deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam temporibus, velit earum laborum officia quasi adipisci non porro doloribus molestiae fugit quo animi! Eveniet labore, iste distinctio placeat illum et.";

}

btn[0].addEventListener("click", cambio1);
btn[1].addEventListener("click", cambio2);
btn[2].addEventListener("click", cambio3);
