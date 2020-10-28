const preload = document.querySelector('.preload');
const preLogo = document.getElementById('pre-logo');
preload.classList.add('show-preloader');
preLogo.classList.add('anim');

const preloader = () =>{
window.addEventListener('load', () => {
      slidePics();
    preload.classList.add('fade');
  	setTimeout(() => {
        preload.classList.remove('show-preloader');
        preload.style['display'] = 'none';
  	}, 1000);
});
}
preloader();