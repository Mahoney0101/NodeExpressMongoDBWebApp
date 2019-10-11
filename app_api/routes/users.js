const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/users');

router
  .route('/register')
  //.get(ctrlUser.usersReadOne)
  .post(ctrlUser.usersCreate);//CREATE REGISTER CNTRLLLLLLL
  
//router
  //.route('/login')
  //.get(ctrlLocations.locationsReadOne)
  //.put(ctrlLocations.locationsUpdateOne)
  //.delete(ctrlLocations.locationsDeleteOne);

// reviews
router
  .route('/login')
  //.post(ctrlLogin.usersCreate);CREATE LOGIN CTRLLLLLLLLLLLLLLL

router
  .route('/application/:locationid/reviews/:reviewid')
  //.get(ctrlReviews.reviewsReadOne)
  //.put(ctrlReviews.reviewsUpdateOne)
  //.delete(ctrlReviews.reviewsDeleteOne);
module.exports = router;