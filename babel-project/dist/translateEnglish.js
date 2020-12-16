"use strict";

var lang = localStorage.getItem("lang");
var engNavBar = ['Start', 'Gallery', 'Contact'];
var engOffer = ['Oak', 'Ash', 'Beech', 'Pine tree'];
var engHeaders = ['Why me?', 'Price?'];
var engConHeaders = ['Address', 'Telephone', 'E-mail'];

if (lang) {
  if (lang === 'uk') {
    document.title = 'Karstol - Professional joinery services';
    document.querySelectorAll('.nav-span').forEach(function (el, idx) {
      el.textContent = engNavBar[idx];
    });

    if (document.getElementById('service-header')) {
      document.getElementById('service-header').innerHTML = "WOODEN STAIRS OF";
      document.querySelectorAll('.hover-me').forEach(function (el, idx) {
        el.textContent = engOffer[idx];
      });
      document.getElementById('comment').textContent = '* The photographs are for illustrative purposes';
      document.querySelectorAll('.why-us-header').forEach(function (el, idx) {
        el.textContent = engHeaders[idx];
      });
      document.querySelector('.why-us').innerHTML = 'I offer measurement, execution and installation of <span class="brown-end">wooden stairs.</span> Stairs are made with the highest precision and adjusted to customer requirements. The offer includes <span class="brown-end">self-supporting stairs</span> and stairs for <span class="brown-end">concrete</span>.';
      document.querySelectorAll('.why-us')[1].innerHTML = 'The <span class="brown-end">price</span> of stairs is set <span class="brown-end">individually</span>. <span class="brown-end">Free measurement and and arrive</span> on an agreed date.';
      document.getElementById('author').textContent = "The website was created by Micha\u0142 Pachuc";
    } else if (document.getElementById('galleryIdentifier')) {
      document.querySelector('.header').innerHTML = "Gal<span class=\"brown-end\">lery</span>";
    } else if (document.getElementById('contactIdentifier')) {
      document.querySelector('.header').innerHTML = "Con<span class=\"brown-end\">tact</span>";
      document.querySelectorAll('.contact-info-head').forEach(function (el, idx) {
        el.innerHTML = engConHeaders[idx];
      });
    }
  } else if (lang === 'pl') {
    localStorage.setItem("lang", '');
  }
}

var uk = document.querySelector('.uk').addEventListener('click', function () {
  localStorage.setItem("lang", 'uk');
  window.location.reload();
});
var pl = document.querySelector('.pl').addEventListener('click', function () {
  localStorage.setItem("lang", 'pl');
  window.location.reload();
});