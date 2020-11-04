const preload = document.querySelector('.preload');
const preLogo = document.getElementById('pre-logo');
preload.classList.add('show-preloader');
preLogo.classList.add('anim');

const preloader = () =>{
window.addEventListener('load', () => {
      
    preload.classList.add('fade');
  	setTimeout(() => {
        preload.classList.remove('show-preloader');
        preload.style['display'] = 'none';
  	}, 900);
});
}
preloader();