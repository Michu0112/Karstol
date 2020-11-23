const navBar = document.querySelector('.nav-bar');
const menuBtn = document.querySelector('.menu-btn');
const body = document.querySelector('body');
let menuOpen = false;
const backDrop = document.querySelector('.backDrop');
const triggers = [navBar,menuBtn];
triggers.forEach((el) =>{
el.addEventListener('click', () =>{
   if(!menuOpen){
      menuBtn.classList.add('open');
      menuOpen = true;
      navBar.style.right = 0;
      body.style.overflowY = "hidden";
      backDrop.style.display = 'block';
      setTimeout(() =>{
         backDrop.style.backgroundColor = 'rgba(0, 0, 0, 0.616)';
      },300)
   }
   else{
      body.style.overflowY = "auto";
      menuBtn.classList.remove('open');
      menuOpen = false;
      navBar.style.right = '-100%';
      backDrop.style.backgroundColor = 'transparent';
      setTimeout(() =>{
         backDrop.style.display = 'none';
      },300)
   }
});
})