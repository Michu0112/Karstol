"use strict";

var main = document.querySelector('main');
var buttonsOfPages = document.querySelectorAll('.page-button');
var amountOfPics = [12, 24, 36, 48, 60, 72, 84, 96];
var arr = [];
var t = localStorage.getItem("cont");
var p = localStorage.getItem("numPage");

if (t) {
  main.innerHTML = '';
  var newT = t.split(',');

  for (var i = 0; i < 12; i++) {
    main.innerHTML += newT[i];
  }

  buttonsOfPages[p].style.transform = 'translateY(-5px)';
  console.log(p);
} else {
  firstOutPut(0, 12);
  p = 0;
  navEls[p].style.transform = 'translateY(-5px)';
  console.log(p);
}

var firstOutPut = function firstOutPut(start, amount) {
  for (var _i = start; _i < amount; _i++) {
    main.innerHTML += "<div>\n        <a href=\"".concat(linksMax[_i], "\" data-lightbox=\"lightbox-group-1\">\n            <div class=\"lightbox-thumbnail\" class=\"g-min\" style=\"background-image: url('").concat(linksMin[_i], "'); background-repeat: no-repeat;\n            background-size: cover;\"></div>\n        </a>\n        </div>");
  }
};

window.addEventListener('beforeunload', function () {
  outputtingPhotos(0, 12);
  localStorage.setItem("cont", arr);
  buttonsOfPages.forEach(function (el) {
    el.style.transform = 'translateY(0px)';
  });
});
var navEls = document.querySelectorAll('.memory-trigger');
navEls.forEach(function (el) {
  el.addEventListener('click', function () {
    outputtingPhotos(0, 12);
    localStorage.setItem("cont", arr);
    localStorage.setItem("numPage", 0);
  });
});
buttonsOfPages.forEach(function (el, idx) {
  el.addEventListener('click', function () {
    outputtingPhotos(amountOfPics[idx] - 12, amountOfPics[idx]);
    localStorage.setItem("numPage", idx);
    localStorage.setItem("cont", arr);
    window.location.reload();
  });
});

var outputtingPhotos = function outputtingPhotos(start, amount) {
  for (var O = start; O < amount; O++) {
    arr.push("<div>\n    <a href=\"".concat(linksMax[O], "\" data-lightbox=\"lightbox-group-1\">\n        <div class=\"lightbox-thumbnail\" class=\"g-min\" style=\"background-image: url('").concat(linksMin[O], "'); background-repeat: no-repeat;\n        background-size: cover;\"></div>\n    </a>\n    </div>"));
  }
};