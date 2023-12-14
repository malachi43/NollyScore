const moviesRated = document.querySelector('#movies-rated');
const moviesRatedSection = document.querySelector('.movies-rated');

const reviewsWritten = document.querySelector('#reviews-written');
const reviewsWrittenSection = document.querySelector('.reviews-written');

const watchList = document.querySelector('#watch-list');
const watchListSection = document.querySelector('.watch-list');


function getUsernameFromURL() {
    const queryParams = new URLSearchParams(window.location.search)
    const span = document.getElementById("username")
    const h1 = document.getElementById("userId")

    const username = queryParams.get("username")
    span.innerHTML = `<i>@${username}</i>`
    h1.textContent = username
}

window.onload = function () {
    getUsernameFromURL()
}


moviesRated.addEventListener('click', function () {
    moviesRated.classList.add('activeNav');
    reviewsWritten.classList.remove('activeNav');
    watchList.classList.remove('activeNav');

    moviesRatedSection.style.display = "flex";
    reviewsWrittenSection.style.display = "none";
    watchListSection.style.display = "none";

})

reviewsWritten.addEventListener('click', function () {
    moviesRated.classList.remove('activeNav');
    reviewsWritten.classList.add('activeNav');
    watchList.classList.remove('activeNav');

    moviesRatedSection.style.display = 'none';
    reviewsWrittenSection.style.display = 'block';
    watchListSection.style.display = 'none';

})


watchList.addEventListener('click', function () {
    moviesRated.classList.remove('activeNav');
    reviewsWritten.classList.remove('activeNav');
    watchList.classList.add('activeNav');

    moviesRatedSection.style.display = "none";
    reviewsWrittenSection.style.display = "none";
    watchListSection.style.display = "flex";

})
