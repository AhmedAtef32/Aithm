
// import Splide from '@splidejs/splide';


// new Splide( '.splide' ).mount();


// start carousel-two section 
const sliderm = new Sliderm('#testimonialCrousel', {
    arrow: false,
    pagination: true,
    grouping: false,
    loop: false,
    preview: false,
    columns: 2,
    duration: 1000,
    spacing: 0,
    align: 'center',
  });

  

  // End carousel-two section 

  
  const customCursor = document.querySelector('.custom-cursor');

  document.addEventListener('mousemove', (e) => {
    customCursor.style.top = `${e.clientY}px`;
    customCursor.style.left = `${e.clientX}px`;
  });