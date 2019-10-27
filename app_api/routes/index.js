const express = require('express');
const router = express.Router();
//const ctrlApplication = require('../controllers/apps');
const ctrlReviews = require('../controllers/reviews');

router
  .route('/form')
  .post(ctrlReviews.reviewsCreate);

router
  .route('/reviews')
  .get(ctrlReviews.getAppList);
module.exports = router;