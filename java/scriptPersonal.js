const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = document.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card =>{
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) =>{
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
  if(!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () =>{
  isDragging = false;
  carousel.classList.remove("dragging");
}

const autoPlay = () =>{
  if(window.innerWidth < 800 ) return;
  timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500)
}
autoPlay();

const infiniteScroll = () =>{
  if(carousel.scrollLeft ===0){
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    carousel.classList.remove("no-transition");
  }else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth -carousel.offsetWidth){
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);
  if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mousenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

//----------------------------------------------------------------------------------------

const wrapper2 = document.querySelector(".wrapper2");
const carousel2 = document.querySelector(".carousel2");
const arrowBtns2 = document.querySelectorAll(".wrapper2 i");
const firstCardWidth2 = document.querySelector(".card2").offsetWidth;
const carouselChildrens2 = [...carousel2.children];

let isDragging2 = false, startX2, startScrollLeft2, timeoutId2;

let cardPerView2 = Math.round(carousel2.offsetWidth / firstCardWidth2);

carouselChildrens2.slice(-cardPerView2).reverse().forEach(card2 =>{
  carousel2.insertAdjacentHTML("afterbegin", card2.outerHTML);
});

carouselChildrens2.slice(0, cardPerView2).forEach(card2 =>{
  carousel2.insertAdjacentHTML("beforeend", card2.outerHTML);
});

arrowBtns2.forEach(btn2 => {
  btn2.addEventListener("click", () => {
    carousel2.scrollLeft += btn2.id === "left2" ? -firstCardWidth2 : firstCardWidth2;
  });
});

const dragStart2 = (e) =>{
  isDragging2 = true;
  carousel2.classList.add("dragging2");
  startX2 = e.pageX;
  startScrollLeft = carousel2.scrollLeft;
}

const dragging2 = (e) =>{
  if(!isDragging2) return;
  carousel2.scrollLeft = startScrollLeft - (e.pageX - startX2);
}

const dragStop2 = () =>{
  isDragging2 = false;
  carousel2.classList.remove("dragging2");
}

const autoPlay2 = () =>{
  if(window.innerWidth < 800 ) return;
  timeoutId2 = setTimeout(() => carousel2.scrollLeft += firstCardWidth2, 2500);
}
autoPlay2();

const infiniteScroll2 = () =>{
  if(carousel2.scrollLeft ===0){
    carousel2.classList.add("no-transition2");
    carousel2.scrollLeft = carousel2.scrollWidth - (2 * carousel2.offsetWidth);
    carousel2.classList.remove("no-transition2");
  }else if(Math.ceil(carousel2.scrollLeft) === carousel2.scrollWidth -carousel2.offsetWidth){
    carousel2.classList.add("no-transition2");
    carousel2.scrollLeft = carousel2.offsetWidth;
    carousel2.classList.remove("no-transition2");
  }

  clearTimeout(timeoutId2);
  if(!wrapper2.matches(":hover")) autoPlay2();
}

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousemove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("scroll", infiniteScroll2);
wrapper2.addEventListener("mousenter", () => clearTimeout(timeoutId2));
wrapper2.addEventListener("mouseleave", autoPlay2);