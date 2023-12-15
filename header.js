let topSearchBtn = document.querySelector("#search");
let searchImg = document.querySelector(".top-searchbar");
let searchbar = document.querySelector(".search-input");
let login = document.querySelector("#login");

const searchTab = () => {
  searchImg.style.display = "none";
  searchbar.style.display = "block";
  login.style.marginLeft = "70px";
};
const addSearchImg = () => {
  searchbar.value = "";
  searchbar.style.display = "none";
  searchImg.style.display = "block";
  login.style.marginLeft = "0";
};
topSearchBtn.addEventListener("mouseover", searchTab);
topSearchBtn.addEventListener("mouseout", addSearchImg);

const closeMoreBtn = document.getElementById("close-more");
const closeParagraph = document.querySelector("#close-more > p");
let moreContainer = document.getElementById("more-container");
const more = document.getElementById("more");
const harmburgerMenu = document.getElementById("harmburger-menu");
const closeHarmburgerBtn = document.getElementById("close-harmburger");
const harmburger = document.getElementById("harmburger");
const container = document.getElementById("container");
let isMoreClicked;

//opens up the menu in mobile phones.
harmburger.addEventListener("click", function () {
  harmburgerMenu.style.display = "flex";
});

//close the menu on mobile
closeHarmburgerBtn.addEventListener("click", function () {
  harmburgerMenu.style.display = "none";
});

//opens the more option when user moves the cursor ovet the text.
more.addEventListener("mouseover", function () {
  moreContainer.style.display = "flex";
});

//close the more option when the user moves the cursor away.
more.addEventListener("mouseout", function () {
  if (moreContainer.style.display === "flex") {
    moreContainer.style.display = "none";
  }
});

let homepage = document.querySelector("#logo");

homepage.addEventListener("click", () => {
  window.location.href = "index.html";
});
