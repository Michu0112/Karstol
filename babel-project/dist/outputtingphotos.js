"use strict";

var main = document.querySelector('main');
var buttonsOfPages = document.querySelectorAll('button');
var arr = [];

var firstOutPut = function firstOutPut() {
  main.innerHTML = '';

  for (var i = 0; i <= linksMaxConcrete.length; i++) {
    main.innerHTML += "<div>\n        <a href=\"".concat(linksMaxConcrete[i], "\" data-lightbox=\"lightbox-group-1\">\n            <div class=\"lightbox-thumbnail\" class=\"g-min\" style=\"background-image: url('").concat(linksMinConcrete[i], "'); background-repeat: no-repeat;\n            background-size: cover;\"></div>\n        </a>\n        </div>");
  }
};

var t = localStorage.getItem("cont");
var p = localStorage.getItem("back");

if (t) {
  buttonsOfPages[p].style.backgroundColor = "rgba(172, 116, 67)";
  main.innerHTML = '';
  var newT = t.split(',');

  for (var i = 0; i < linksMaxConcrete.length; i++) {
    main.innerHTML += newT[i];
  }
} else {
  buttonsOfPages[0].style.backgroundColor = "rgba(172, 116, 67)";
  firstOutPut();
}

buttonsOfPages.forEach(function (el, idx) {
  el.addEventListener('click', function () {
    if (idx === 0) {
      localStorage.setItem("back", idx);
      prepareOutPut(linksMaxConcrete, linksMinConcrete);
      window.location.reload();
    } else {
      localStorage.setItem("back", idx);
      window.location.reload();
      prepareOutPut(linksMaxSelfsupport, linksMinSelfSupport);
    }
  });
});

var prepareOutPut = function prepareOutPut(maxArray, minArray) {
  for (var O = 0; O < maxArray.length; O++) {
    arr.push("<div>\n    <a href=\"".concat(maxArray[O], "\" data-lightbox=\"lightbox-group-1\">\n        <div class=\"lightbox-thumbnail\" class=\"g-min\" style=\"background-image: url('").concat(minArray[O], "'); background-repeat: no-repeat;\n        background-size: cover;\"></div>\n    </a>\n    </div>"));
  }

  localStorage.setItem("cont", arr);
};