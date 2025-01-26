const navbar = document.querySelector('nav.navbar');



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
})