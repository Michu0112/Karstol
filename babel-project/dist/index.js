"use strict";

var navBar = document.querySelector('.nav-bar');
var menuBtn = document.querySelector('.menu-btn');
var body = document.querySelector('body');
var menuOpen = false;
var backDrop = document.querySelector('.backDrop');
var triggers = [navBar, menuBtn];
triggers.forEach(function (el) {
  el.addEventListener('click', function () {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
      navBar.style.right = 0;
      body.style.overflowY = "hidden";
      backDrop.style.display = 'block';
      setTimeout(function () {
        backDrop.style.backgroundColor = 'rgba(0, 0, 0, 0.616)';
      }, 300);
    } else {
      body.style.overflowY = "auto";
      menuBtn.classList.remove('open');
      menuOpen = false;
      navBar.style.right = '-100%';
      backDrop.style.backgroundColor = 'transparent';
      setTimeout(function () {
        backDrop.style.display = 'none';
      }, 300);
    }
  });
});