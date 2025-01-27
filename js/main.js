
const navbar = document.querySelector('nav.navbar');
const navItems = document.querySelectorAll('.nav-item');
const btnScrollTop = document.querySelector('#ScrollTop');
/**
 * remove active class from all nav items
 * add active class to the clicked nav item
 */
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function() {
        for (let j = 0; j < navItems.length; j++) {
            navItems[j].classList.remove('active');
        }
        navItems[i].classList.add('active');
    });
}





/**
 * add padding top and bottom from navbar when scrolled
 * remove padding top and bottom to navbar when not scrolled
 */
document.addEventListener("scroll", function() {  
    
    const scroll = window.scrollY;
    console.log(scroll);

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
