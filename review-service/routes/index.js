const express = require('express');
const reviewsService = require('../services/reviewsService.js'); 

var router = express.Router();

const version = process.env.npm_package_version;

/* GET home page. */
router.get('/', function(req, res) {
  res.send({
    version,
    endpoints: [
        "/reviews/{id}",
    ]
  });
});

router.get('/reviews/:filmId', function(req, res, next) {
    reviewsService
      .fetchReviews(req.params.filmId)
      .then(data => res.json(data))
      .catch(error => next(error));
});

module.exports = router;
