const navBar = document.querySelector('.nav-bar');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const backDrop = document.querySelector('.backDrop');
menuBtn.addEventListener('click', () =>{
   if(!menuOpen){
      menuBtn.classList.add('open');
      menuOpen = true;
      navBar.style.right = 0;
      backDrop.style.display = 'block';
      setTimeout(() =>{
         backDrop.style.backgroundColor = 'rgba(0, 0, 0, 0.616)';
      },300)
   }
   else{
      menuBtn.classList.remove('open');
      menuOpen = false;
      navBar.style.right = '-100%';
      backDrop.style.backgroundColor = 'transparent';
      setTimeout(() =>{
         backDrop.style.display = 'none';
      },300)
   }
});