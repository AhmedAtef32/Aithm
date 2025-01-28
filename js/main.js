const navbar = document.querySelector("nav.navbar");
const navLinks = document.querySelectorAll("a.nav-link");
const btnScrollTop = document.querySelector("#ScrollTop");
const sideBarLinks = document.querySelectorAll(".sidebar-link");
const ballImgs = document.querySelectorAll(".ball-img");
const sliderBalls = document.querySelector(".sliderBalls");
const imgSliderBalls = document.querySelector(".img-sliderBalls");
const closeSliderBalls = document.querySelector(".close-sliderBalls i");
const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");


const arrImgSrc = [
  "imgs/Gallery-1.png",
  "imgs/Gallery-2.png",
  "imgs/Gallery-3.png",
  "imgs/Gallery-4.png",
  "imgs/Gallery-5.png",
  "imgs/Gallery-6.png",
  "imgs/Gallery-7.png",
  "imgs/Gallery-8.png",
  "imgs/Gallery-9.png",
  "imgs/Gallery-10.png",
  "imgs/Gallery-11.png",
  "imgs/Gallery-12.png",
];
// get the current page path
const currentPage = window.location.pathname;
/**
 * remove active class from all nav items
 * add active class to the clicked nav item
 */
navLinks.forEach((link) => {
  if (link.href.includes(currentPage)) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

if (currentPage === "/" || currentPage === "/Aithm/") {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  navLinks[0].classList.add("active");
}


  

  
  const customCursor = document.querySelector('.custom-cursor');

  document.addEventListener('mousemove', (e) => {
    customCursor.style.top = `${e.clientY}px`;
    customCursor.style.left = `${e.clientX}px`;
  });

/**
 * remove active class from all nav items
 * add active class to the clicked nav item
 */
sideBarLinks.forEach((link) => {
  if (link.href.includes(currentPage)) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
if (currentPage === "/" || currentPage === "/Aithm/") {
  sideBarLinks.forEach((link) => {
    link.classList.remove("active");
  });
  sideBarLinks[0].classList.add("active");

  
}

/**
 * add padding top and bottom from navbar when scrolled
 * remove padding top and bottom to navbar when not scrolled
 */
document.addEventListener("scroll", function () {
  const scroll = window.scrollY;

  if (scroll > 0) {
    navbar.classList.remove("pb-2");
    navbar.classList.add("pb-4");

    navbar.classList.remove("pt-3");
    navbar.classList.add("pt-4");
  } else {
    navbar.classList.add("pb-2");
    navbar.classList.remove("pb-4");

    navbar.classList.add("pt-3");
    navbar.classList.remove("pt-4");
  }

  if (scroll > 100) {
    btnScrollTop.classList.remove("opacity-0");
    btnScrollTop.classList.add("opacity-100");
  } else {
    btnScrollTop.classList.add("opacity-0");
    btnScrollTop.classList.remove("opacity-100");
  }
});

btnScrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

ballImgs.forEach((ballImg) => {
  ballImg.addEventListener("click", function () {
    sliderBalls.classList.remove("d-none");
    imgSliderBalls.setAttribute("src", ballImg.getAttribute("src"));
  });
});

closeSliderBalls.addEventListener("click", function () {
  sliderBalls.classList.add("d-none");
});

let imgIndex = 0;

arrowRight.addEventListener("click", function () {

  imgIndex = arrImgSrc.indexOf(imgSliderBalls.getAttribute("src"));
  imgIndex = (imgIndex + 1) ;
  if(imgIndex >= arrImgSrc.length){
    imgIndex = 0;
  }
  imgSliderBalls.setAttribute("src", arrImgSrc[imgIndex]);
});

arrowLeft.addEventListener("click", function () {

  imgIndex = arrImgSrc.indexOf(imgSliderBalls.getAttribute("src"));
  imgIndex = (imgIndex - 1);
  if(imgIndex < 0){
    imgIndex = arrImgSrc.length - 1;
  }

  imgSliderBalls.setAttribute("src", arrImgSrc[imgIndex]);
});
