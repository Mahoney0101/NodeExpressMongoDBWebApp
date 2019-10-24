const express = require('express');
const router = express.Router();
//const ctrlApplication = require('../controllers/apps');
const ctrlReviews = require('../controllers/reviews');

router
  .route('/form')
  .post(ctrlReviews.reviewsCreate);

// router
//   .route('/apps/:applicationid')
//   .get(ctrlApplication.applicationReadOne)
//   .put(ctrlApplication.applicationUpdateOne)
//   .delete(ctrlApplication.applicationDeleteOne);

// // reviews
// router
//   .route('/apps/:applicationid/reviews')
//   .post(ctrlReviews.reviewsCreate);

// router
//   .route('/application/:locationid/reviews/:reviewid')
//   .get(ctrlReviews.reviewsReadOne)
//   .put(ctrlReviews.reviewsUpdateOne)
//   .delete(ctrlReviews.reviewsDeleteOne);
module.exports = router;