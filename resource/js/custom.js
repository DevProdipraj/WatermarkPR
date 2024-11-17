
// this code for stickey header 
let header = document.querySelector('.header');

window.addEventListener('scroll', function(){
   header.classList.toggle('sticky', window.scrollY > 0);
});

// use for mobile menu 
let bars = document.querySelector("#bars");
let nav_menu = document.querySelector(".menu");

bars.addEventListener('click', function(){
   bars.classList.toggle("clicked");
   nav_menu.classList.toggle("show_menu");
});

