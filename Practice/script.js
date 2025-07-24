console.log("hello from the javascript");

const changeTextBtn = document.querySelector("#changeTextBtn");
let paragraph = document.querySelector("#text-change");
changeTextBtn.addEventListener("click", () => {
  paragraph.innerText = "THIS IS THE NEW TEXT IN THE PARAGRAPH";
});

const highlightCityBtn = document.querySelector("#highlightCityBtn");
let cities = document.querySelector("#city-list");
highlightCityBtn.addEventListener("click", () => {
  let firstcity = cities.firstElementChild;
  firstcity.setAttribute("class", "highlight");
});

let changeOrderBtn = document.querySelector("#changeOrderBtn");
changeOrderBtn.addEventListener("click", () => {
  let order = document.querySelector(".order");
  order.innerText = "Espresso";
  order.classList.add("highlight");
});


