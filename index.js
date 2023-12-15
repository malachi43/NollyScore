//For the carousel
let i = 0;
let images = [];
let time = 5000;

images[0] = "images/cara1.png";
images[1] = "images/cara2.png";
images[2] = "images/cara3.png";
images[3] = "images/Living in Bondage 1 (2).png";
images[4] = "images/cara6.png";
images[5] = "images/cara7.png";
images[6] = "images/Living in bindage.png";

function changeImg() {
  // Select the <img> element by its id
  let imageDisplay = document.getElementById("imageDisplay");

  // Set the src attribute of the selected <img> element
  imageDisplay.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeImg, time);
}

window.onload = changeImg;

// function changeImg() {
//   document.hasChildNodes.src = images[i];

//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout(changeImg(), time);
// }
// window.onload = changeImg;

let toRate = document.querySelectorAll(".movie-card-nneka");

toRate.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = "ratingCard.html";
  });
});

let signIn = document.querySelector(".logger");

signIn.addEventListener("click", () => {
  window.location.href = "login.html";
});

let movieCard = document.querySelectorAll(".vector-pink");
movieCard.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = "ratingCard.html";
  });
});

let watchThriller = document.querySelectorAll(".vector-all");
watchThriller.forEach((element) => {
  element.addEventListener("click", () => {
    let link = element.id;
    window.open(link, "_blank");
  });
});

let newRelease = document.querySelectorAll(".trade-button");

newRelease.forEach((element) => {
  element.addEventListener("click", () => {
    let url = element.id;
    window.open(url, "_blank");
  });
});
