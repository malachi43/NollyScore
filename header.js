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

window.onload = function () {
  const closeMoreBtn = document.getElementById("close-more");
  const moreContainer = document.getElementById("more-container");
  const more = document.getElementById("more");
  const harmburgerMenu = document.getElementById("harmburger-menu");
  const closeHarmburgerBtn = document.getElementById("close-harmburger");
  const harmburger = document.getElementById("harmburger");

  //For Desktop by Fred
  const desktop = document.querySelector(".click-for-more");
  desktop.addEventListener("click", function () {
    if (harmburgerMenu.style.display == "none") {
      harmburgerMenu.style.display = "flex";
    } else if ((harmburgerMenu.style.display = "flex")) {
      harmburgerMenu.style.display = "none";
    }
  });

  //opens up the menu in mobile phones.
  harmburger.addEventListener("click", function () {
    harmburgerMenu.style.display = "flex";
    // harmburgerMenu.style.transition = "display 250ms ease-in-out"
  });

  //close the menu on mobile
  closeHarmburgerBtn.addEventListener("click", function () {
    harmburgerMenu.style.display = "none";
  });

  //opens the more option when clicked on desktop
  more.addEventListener("click", function () {
    moreContainer.style.display = "flex";
  });

  //closes the more menu opened on desktop
  closeMoreBtn.addEventListener("click", function () {
    moreContainer.style.display = "none";
  });
};
