var express = require('express');
var router = express.Router();
const ctrlUsers = require('../controllers/users');

/* post users. */
router
  .route('/')
  //.get(ctrlUsers.addReview)
  //.post(ctrlUsers.createUser);

module.exports = router;
