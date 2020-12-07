"use strict";

var preload = document.querySelector('.preload');
var preLogo = document.getElementById('pre-logo');
preload.classList.add('show-preloader');
preLogo.classList.add('anim');
window.addEventListener('load', function () {
  preload.classList.add('fade');
  setTimeout(function () {
    preload.classList.remove('show-preloader');
    preload.style['display'] = 'none';
  }, 800);
});