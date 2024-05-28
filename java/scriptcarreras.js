/*Pagina de ITI*/

const bloque = document.querySelectorAll('.bloque');
const h2 = document.querySelectorAll('.h2');

h2.forEach((cadaH2, i )=>{//Buscar cada h2 en la posicion de cada bloque
    h2[i].addEventListener('click', ()=>{//cuando se presionen las etiquetas h2 en un bloque
        bloque.forEach((cadaBloque, i)=>{//recorre todos los bloques y elimina la clase activo
            bloque[i].classList.remove('activo')
        })
        bloque[i].classList.add('activo')//agrega la clase activo en el bloque que presionamos
    })
})