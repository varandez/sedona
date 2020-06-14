var link = document.querySelector(".search__button");
var modal = document.querySelector(".search-form");
var dateArrival = document.querySelector("#appointment-date-of-arrival");
var dateDeparture = document.querySelector("#appointment-date-of-departure");
var children = document.querySelector("#children");
var adult = document.querySelector("#adult");
var form = document.querySelector("form");
var btn = document.querySelector("search-form__btn");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("setadult");
  storage = localStorage.getItem("setchildren");
} catch (err) {
  isStorageSupport = false;
}

modal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.contains("search-form__visible")
  
  if (storage) {
    children.value = storage;
    adult.value = storage;
    btn.focus();
  } else {
    adult.focus();
  }
});

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (modal.classList.contains("search-form__visible")) {
        modal.classList.add("search-form__invisible");
        modal.classList.remove("search-form__visible");
    } 
    else {
        modal.classList.add("search-form__visible");
        modal.classList.remove("search-form__invisible");
        modal.classList.remove("search-form__error");
    }
     dateArrival.focus();
  });

  form.addEventListener("submit", function (evt) {
    if (!dateArrival.value || !dateDeparture.value || !children.value || !adult.value) {
        evt.preventDefault();
        modal.classList.remove("search-form__error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("search-form__error");
    }   else {
        if (isStorageSupport) {
          localStorage.setItem("setadult", adult.value);
          localStorage.setItem("setchildren", children.value);
        }
      }
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains("search-form__visible")) {
        modal.classList.remove("search-form__visible");
        modal.classList.add("search-form__invisible");
        modal.classList.remove("search-form__error");
      }
    }
  });