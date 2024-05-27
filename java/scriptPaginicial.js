//-----------------------------------------------------------------------------------------------------

/*Carrusel de imagenes*/

    const botonIzq = document.querySelector(".bl");
    const botonDer = document.querySelector(".br");
    const slideer = document.querySelector("#slider1");
    const sliderSection = document.querySelectorAll(".slider");

    let op = 0;
    let counter = 0;

    // Event listeners for buttons
    botonIzq.addEventListener("click", moverIzq);
    botonDer.addEventListener("click", moverDer);

    // Automatic slide every 5 seconds
    setInterval(moverDer, 5000);

    // Function to move the slider to the right
    function moverDer() {
        if (counter >= sliderSection.length - 1) {
            op = 0;
            counter = 0;
        } else {
            counter++;
            op += 100 / sliderSection.length;
        }
        slideer.style.transform = `translateX(-${op}%)`;
        slideer.style.transition = "transform 0.6s ease";
    }

    // Function to move the slider to the left
    function moverIzq() {
        if (counter <= 0) {
            counter = sliderSection.length - 1;
            op = 100 - (100 / sliderSection.length);
        } else {
            counter--;
            op -= 100 / sliderSection.length;
        }
        slideer.style.transform = `translateX(-${op}%)`;
        slideer.style.transition = "transform 0.6s ease";
    }

    /*Pagina de ITI*/

const bloque = document.querySelectorAll('.bloque');
const h2 = document.querySelectorAll('.h2');
