"use strict";

var main = document.querySelector('main');

var outputtingPhotos = function outputtingPhotos() {
  for (var i = 0; i < 12; i++) {
    main.innerHTML += "<div>\n    <a href=\"".concat(linksMax[i], "\" data-lightbox=\"lightbox-group-1\">\n        <div class=\"lightbox-thumbnail\" class=\"g-min\" style=\"background-image: url('").concat(linksMin[i], "'); background-repeat: no-repeat;\n        background-size: cover;\"></div>\n    </a>\n    </div>");
  }
};

outputtingPhotos();