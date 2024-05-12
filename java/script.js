const logo = document.getElementById("logo");//guardamos el id del logo en la variable
const barraLateral = document.querySelector(".contenido_menu");//devuelve el primer contenido del documento o div
const span = document.querySelector("span");//obtener el primer elemento span

logo.addEventListener("click",()=>{//Al presionar el icono hara las siguientes acciones
    barraLateral.classList.toggle("mini-barra-lateral");//agrega o quita la clase del css
    span.classList.toggle("oculto");
});