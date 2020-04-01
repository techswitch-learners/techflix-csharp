const fetch = require('node-fetch');

const apiKey = process.env.TMDB_API_KEY; 

function fetchFilmMetadata(filmId) {
    const url = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${apiKey}&language=en-US`;
    const delay = process.env.METADATA_DELAY_FILMS;
    const failure = process.env.METADATA_FAILURE_FILMS;
    return fetchMetadata(url, delay, failure);
}

function fetchPersonMetadata(personId) {
    const url = `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}&language=en-US`;
    const delay = process.env.METADATA_DELAY_PEOPLE;
    const failure = process.env.METADATA_FAILURE_PEOPLE;
    return fetchMetadata(url, delay, failure);
}

function fetchMetadata(url, averageDelay, failureRate) {
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
    fetchFilmMetadata,
    fetchPersonMetadata
};