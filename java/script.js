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