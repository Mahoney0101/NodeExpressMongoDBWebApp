var express = require('express');
var router = express.Router();
const ctrlUserss = require('../controllers/users');

/* post users listing. */
router
  .route('/users')
  //.get(ctrlUsers.addReview)
  .post(ctrlUsers.createUser);

module.exports = router;
