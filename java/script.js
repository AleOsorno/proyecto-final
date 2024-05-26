const logo = document.getElementById("logo");//guardamos el id del logo en la variable
const barraLateral = document.querySelector(".contenido_menu");//devuelve el primer contenido del documento o div
const spans = document.querySelectorAll("span");//obtener todo elemento span
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){//validamos si se tiene activada la clase de max barra lateral
        menu.children[0].style.display = "none"; //ocultamos el primer icono
        menu.children[1].style.display = "block"; //mostramos el segundo icono
    }else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){//revisamos el tamaño de la pantalla
        barraLateral.classList.add("mini-barra-lateral");//añadimos una clase
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.toggle("predido");
        });
    }
});

logo.addEventListener("click",()=>{//Al presionar el icono hara las siguientes acciones
    barraLateral.classList.toggle("mini-barra-lateral");//agrega o quita la clase del css
    main.classList.toggle("min-main");
    spans.forEach((span)=>{//De esta manera recorremos todos los span y agregamos o quitamos la clase oculto
        span.classList.toggle("oculto");
    });
});

//-----------------------------------------------------------------------------------------------------

/*Carrusel de imagenes*/

const botonIzq = document.querySelector(".bl"),//variables 
        botonDer = document.querySelector(".br"),
        slideer = document.querySelector("#slider1"),
        sliderSection = document.querySelectorAll(".slider");

botonIzq.addEventListener("click", e=> moverIzq())//espera a que se haga click en el boton izquierdo para activar la funcion
botonDer.addEventListener("click", e=> moverDer())//espera a que se haga click en el boton derecho para activar la funcion        

setInterval(()=>{//ejecutar infinitamente el carrusel cada 5 segundos.
    moverDer();
},5000);

let op=0;
let counter= 0;

function moverDer(){
    if(counter>=sliderSection.length-1){//si counter es mayor a las imagenes del carrusel, regresara a la primera imagen
        op=0;
        counter=0;
        slideer.style.transform = `translate(-${op}%)`;
    }else{//Si no, movera el carrusel de forma normal
        counter++;
        op = op + 25.0;
        slideer.style.transform = `translate(-${op}%)`;//mover la imagen con la variable op, se agrea de esa forma para tomar en cuenta el valor de la variable
        slideer.style.transition = "all ease 0.6s";//agregar una transición de 0.6 segundos
    }
}

function moverIzq(){
    counter--;
    if(counter < 0){
        counter = sliderSection.length-1;
        op= 75.0;
        slideer.style.transform = `translate(-${op}%)`;//mover la imagen con la variable op, se agrea de esa forma para tomar en cuenta el valor de la variable
    }else{
        op = op - 25.0;
        slideer.style.transform = `translate(-${op}%)`;//mover la imagen con la variable op, se agrea de esa forma para tomar en cuenta el valor de la variable
        slideer.style.transition = "all ease 0.6s";
    }
}