const moviesRated = document.querySelector('#movies-rated');
const moviesRatedSection = document.querySelector('.movies-rated');

const reviewsWritten = document.querySelector('#reviews-written');
const reviewsWrittenSection = document.querySelector('.reviews-written');

const watchList = document.querySelector('#watch-list');
const watchListSection = document.querySelector('.watch-list');


moviesRated.addEventListener('click', function(){
    moviesRated.classList.add('activeNav');
    reviewsWritten.classList.remove('activeNav');
    watchList.classList.remove('activeNav');

    moviesRatedSection.style.display = "flex";
    reviewsWrittenSection.style.display ="none";
    watchListSection.style.display = "none";

})

reviewsWritten.addEventListener('click', function(){
    moviesRated.classList.remove('activeNav');
    reviewsWritten.classList.add('activeNav');
    watchList.classList.remove('activeNav');

    moviesRatedSection.style.display = 'none';
    reviewsWrittenSection.style.display = 'block';
    watchListSection.style.display = 'none';

})


watchList.addEventListener('click', function() {
    moviesRated.classList.remove('activeNav');
    reviewsWritten.classList.remove('activeNav');
    watchList.classList.add('activeNav');

    moviesRatedSection.style.display = "none";
    reviewsWrittenSection.style.display = "none";
    watchListSection.style.display = "flex";

})
