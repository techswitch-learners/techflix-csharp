const fetch = require('node-fetch');

const apiKey = process.env.TMDB_API_KEY;

async function fetchReviews(filmId) {
    const averageDelay = process.env.REVIEWS_DELAY;
    const failureRate = process.env.REVIEWS_FAILURE;
    
    const url = `https://api.themoviedb.org/3/movie/${filmId}/reviews?api_key=${apiKey}&language=en-US`;
    
    return fetchData(url, averageDelay, failureRate);
}

function fetchData(url, averageDelay, failureRate) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wasFailure(failureRate)) {
                reject("Failed to fetch metadata.")
            }

            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data));
        }, randomDelay(averageDelay));
    });
}

function randomDelay(average) {
    return (average/2) + Math.random() * average;
}

function wasFailure(failureRate) {
    return Math.random() < failureRate;
}

module.exports = {
    fetchReviews,
};