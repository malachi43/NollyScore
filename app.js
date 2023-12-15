let ratingStar = document.querySelectorAll(".star");

ratingStar.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = "ratingCard.html";
  });
});
