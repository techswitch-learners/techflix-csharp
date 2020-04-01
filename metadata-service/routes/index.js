const express = require('express');
const metadataService = require('../services/metadataService.js'); 

var router = express.Router();

const version = process.env.npm_package_version;

/* GET home page. */
router.get('/', function(req, res) {
  res.json({
    version,
    endpoints: [
        "/films/{id}",
        "/people/{id}"
    ]
  });
});

router.get('/films/:filmId', function(req, res, next) {
  metadataService
      .fetchFilmMetadata(req.params.filmId)
      .then(data => res.json(data))
      .catch(error => next(error));
});

router.get('/people/:personId', function(req, res, next) {
    metadataService
        .fetchPersonMetadata(req.params.personId)
        .then(data => res.json(data))
        .catch(error => next(error));
});

module.exports = router;
