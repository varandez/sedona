var link = document.querySelector(".search__button");
var modal = document.querySelector(".search-form");
var dateArrival = document.querySelector("#appointment-date-of-arrival");
var dateDeparture = document.querySelector("#appointment-date-of-departure");
var children = document.querySelector("#children");
var adult = document.querySelector("#adult");
var form = document.querySelector("form");


modal.classList.remove("search-form--active");

link.addEventListener('click', function () {
  modal.classList.toggle("search-form--active");
});

form.addEventListener("submit", function (evt) {
  if (!dateArrival.value || !dateDeparture.value || !children.value || !adult.value) {
      evt.preventDefault();
      modal.classList.remove("search-form__error");
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add("search-form__error");
  }   
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("search-form--active")) {
      evt.preventDefault();
      modal.classList.remove("search-form--active");
      modal.classList.remove("search-form__error");
    }
  }
});