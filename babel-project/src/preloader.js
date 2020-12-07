const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin',`<div class="preload" style="font-family: 'Turret Road', cursive;">
      <div class="circles-group">
          <div class="logo" id="pre-logo"><span>Kar</span><span class="brown-end">stol</span></div>
      </div>
      </div>`);
const preload = document.querySelector('.preload');
const preLogo = document.getElementById('pre-logo');
preload.classList.add('show-preloader');
preLogo.classList.add('anim');

      preload.classList.add('fade');
  	setTimeout(() => {
        preload.classList.remove('show-preloader');
        preload.style['display'] = 'none';
  	}, 800);

