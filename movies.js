let cardRating = document.querySelectorAll(".star-container");

cardRating.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = "ratingCard.html";
  });
});

let watchThriller = document.querySelectorAll(".movie-watcher");

watchThriller.forEach((element) => {
  element.addEventListener("click", () => {
    let link = element.id;
    window.open(link, "_blank");
  });
});
