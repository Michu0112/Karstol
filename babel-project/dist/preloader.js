"use strict";

var body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', "<div class=\"preload\">\n      <div class=\"circles-group\">\n          <div class=\"logo\" id=\"pre-logo\"><span>Kar</span><span class=\"brown-end\">stol</span></div>\n      </div>\n      </div>");
var preload = document.querySelector('.preload');
var preLogo = document.getElementById('pre-logo');
preload.classList.add('show-preloader');
preLogo.classList.add('anim');
preload.classList.add('fade');
setTimeout(function () {
  preload.classList.remove('show-preloader');
  preload.style['display'] = 'none';
}, 800);