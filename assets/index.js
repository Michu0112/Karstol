const navBar = document.querySelector('.nav-bar');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () =>{
   if(!menuOpen){
      menuBtn.classList.add('open');
      menuOpen = true;
      navBar.style.right = 0;
      menuBtn.style.right = '270px';
   }
   else{
      menuBtn.classList.remove('open');
      menuOpen = false;
      navBar.style.right = '-100%';
      menuBtn.style.right = '20px';
   }
});