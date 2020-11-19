"use strict";

var main = document.querySelector('main');
var buttonsOfPages = document.querySelectorAll('.page-button');
var amountOfPics = [12, 24, 36, 48, 60, 72, 84, 96];
var arr = [];
var t = sessionStorage.getItem("cont");
var newT = t.split(',');

for (var i = 0; i < 13; i++) {
  console.log(i);
  main.innerHTML += newT[i];
}

buttonsOfPages.forEach(function (el, idx) {
  el.addEventListener('click', function () {
    outputtingPhotos(amountOfPics[idx] - 12, amountOfPics[idx]);
    sessionStorage.setItem("numPage", idx);
    sessionStorage.setItem("cont", arr);
    window.location.reload();
  });
});

var outputtingPhotos = function outputtingPhotos(start, amount) {
  main.innerHTML = '';

  for (var _i = start; _i < amount; _i++) {
    arr.push("<div>\n    <a href=\"".concat(linksMax[_i], "\" data-lightbox=\"lightbox-group-1\">\n        <div class=\"lightbox-thumbnail\" class=\"g-min\" style=\"background-image: url('").concat(linksMin[_i], "'); background-repeat: no-repeat;\n        background-size: cover;\"></div>\n    </a>\n    </div>"));
  }
};