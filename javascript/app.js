let hamburger = document.getElementById('hamburger');
let overlay = document.querySelector('.overlay');
let scrollLock = document.querySelector('body');
let mobileNavContainer = document.querySelector('.nav_links');


hamburger.addEventListener('click', function () {
   if (hamburger.classList.contains('open')) {
       hamburger.classList.remove('open');
       overlay.classList.remove('open');
       scrollLock.classList.remove('scroll-lock');
       mobileNavContainer.classList.remove('open');
   } else {
       hamburger.classList.add('open');
       overlay.classList.add('open');
       scrollLock.classList.add('scroll-lock');
       mobileNavContainer.classList.add('open');
   }
})