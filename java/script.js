const logo = document.getElementById("logo");//guardamos el id del logo en la variable
const barraLateral = document.querySelector(".contenido_menu");//devuelve el primer contenido del documento o div
const spans = document.querySelectorAll("span");//obtener todo elemento span

logo.addEventListener("click",()=>{//Al presionar el icono hara las siguientes acciones
    barraLateral.classList.toggle("mini-barra-lateral");//agrega o quita la clase del css
    
    spans.forEach((span)=>{//De esta manera recorremos todos los span y agregamos o quitamos la clase oculto
        span.classList.toggle("oculto");
    });
});