const navbar = document.querySelector('nav.navbar');
const navLinks = document.querySelectorAll('a.nav-link');
const btnScrollTop = document.querySelector('#ScrollTop');
const sideBarLinks = document.querySelectorAll('.sidebar-link');

// get the current page path
const currentPage = window.location.pathname;
console.log(currentPage);
/**
 * remove active class from all nav items
 * add active class to the clicked nav item
 */
navLinks.forEach(link => {
    if (link.href.includes(currentPage)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  if (currentPage === "/") {
    navLinks.forEach(link => {
       link.classList.remove("active");
 });
 navLinks[0].classList.add("active");
 }

/**
 * remove active class from all nav items
 * add active class to the clicked nav item
 */
  sideBarLinks.forEach((link)=>{
 if (link.href.includes(currentPage)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  })
  if(currentPage === "/"){
    sideBarLinks.forEach(link => {
        link.classList.remove("active");
  });
  sideBarLinks[0].classList.add("active");
  }






/**
 * add padding top and bottom from navbar when scrolled
 * remove padding top and bottom to navbar when not scrolled
 */
document.addEventListener("scroll", function() {  
    
    const scroll = window.scrollY;

    if(scroll > 0) {
        navbar.classList.remove('pb-2');
        navbar.classList.add('pb-4');

        navbar.classList.remove('pt-3');
        navbar.classList.add('pt-4');
    }
    else{
        navbar.classList.add('pb-2');
        navbar.classList.remove('pb-4');

        navbar.classList.add('pt-3');
        navbar.classList.remove('pt-4');
    }

    if (scroll > 100) {
        btnScrollTop.classList.remove('opacity-0');
        btnScrollTop.classList.add('opacity-100');
    }else{
        btnScrollTop.classList.add('opacity-0');
        btnScrollTop.classList.remove('opacity-100');
    }


})


btnScrollTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  });
