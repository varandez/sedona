var searchButton = document.querySelector(".search__button");
var searchModal = document.querySelector(".search-form");
var dateArrival = document.querySelector("#appointment-date-of-arrival");
var dateDeparture = document.querySelector("#appointment-date-of-departure");
var childrenInput = document.querySelector("#children");
var adultInput = document.querySelector("#adult");
var searchForm = document.querySelector("form");


searchModal.classList.remove("search-form--active");

searchButton.addEventListener('click', function () {
  searchModal.classList.toggle("search-form--active");
});

searchForm.addEventListener("submit", function (evt) {
  if (!dateArrival.value || !dateDeparture.value || !childrenInput.value || !adultInput.value) {
      evt.preventDefault();
      searchModal.classList.remove("search-form__error");
      searchModal.offsetWidth = searchModal.offsetWidth;
      searchModal.classList.add("search-form__error");
  }   
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchModal.classList.contains("search-form--active")) {
      evt.preventDefault();
      searchModal.classList.remove("search-form--active");
      searchModal.classList.remove("search-form__error");
    }
  }
});