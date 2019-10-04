var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res, next) => {
  res.render('login');
});
router.get('/form', (req, res, next) => {
  res.render('form');
});
router.get('/reviews', (req, res, next) => {
  res.render('reviews');
});

module.exports = router;
