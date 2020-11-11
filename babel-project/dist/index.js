"use strict";

var navBar = document.querySelector('.nav-bar');
var menuBtn = document.querySelector('.menu-btn');
var menuOpen = false;
var backDrop = document.querySelector('.backDrop');
menuBtn.addEventListener('click', function () {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    navBar.style.right = 0;
    menuBtn.style.left = '10%';
    backDrop.style.display = 'block';
    setTimeout(function () {
      backDrop.style.backgroundColor = 'rgba(0, 0, 0, 0.616)';
    }, 300);
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    navBar.style.right = '-100%';
    menuBtn.style.left = '80%';
    backDrop.style.backgroundColor = 'transparent';
    setTimeout(function () {
      backDrop.style.display = 'none';
    }, 300);
  }
});