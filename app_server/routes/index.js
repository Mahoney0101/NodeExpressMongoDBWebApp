var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});


router.get('/login', (req, res, next) => {
  res.render('login');
});
router.get('/form', (req, res, next) => {
  res.render('form');
});

router.get('/register', (req, res, next) => {
  res.render('register');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});


module.exports = router;
