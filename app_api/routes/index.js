const express = require('express');
const router = express.Router();

router
  .route('/application')
  //.get(ctrlLocations.locationsListByDistance)
  //.post(ctrlLocations.locationsCreate);

router
  .route('/application/:applicationid')
  //.get(ctrlLocations.locationsReadOne)
  //.put(ctrlLocations.locationsUpdateOne)
  //.delete(ctrlLocations.locationsDeleteOne);

// reviews
router
  .route('/application/:applicationid/reviews')
  //.post(ctrlReviews.reviewsCreate);

router
  .route('/application/:locationid/reviews/:reviewid')
  //.get(ctrlReviews.reviewsReadOne)
  //.put(ctrlReviews.reviewsUpdateOne)
  //.delete(ctrlReviews.reviewsDeleteOne);
module.exports = router;