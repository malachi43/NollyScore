const score = document.querySelector(".score");
const ratings = document.querySelectorAll(".rating input");
const rated = document.querySelector(".bt-n");
const ratingCard = document.querySelector(".main-container");
const confirmRating = document.querySelector(".hidden");
let selectedRating;

//For Updating the rating
ratings.forEach((rating) => {
  rating.addEventListener("change", () => {
    selectedRating = rating.value;
    const text = selectedRating === 1 ? "star" : "stars";
    score.textContent = `${selectedRating} ${text} `;
  });
});

// Runs when Rate Button is clicked
rated.addEventListener("click", () => {
  if ((ratingCard.style.display = "flex") && selectedRating) {
    ratingCard.style.display = "none";
    confirmRating.style.display = "block";
  } else {
    alert("Please pick a rating star");
  }
});

// Checks for confirmation of login
if (!localStorage.getItem("userObj")) {
  const url = new URL(window.location);
  url.pathname = "login.html";
  window.location = url;
  alert("Please Login to rate");
}
