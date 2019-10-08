const mongoose = require('mongoose');
const application = mongoose.model('apps');


const reviewsCreate = function (req, res) {
    const applicationid = req.params.applicationid;
    if (applicationid) {
        application
        .findById(applicationid)
        .select('reviews')
        .exec((err, application) => {
          if (err) {
            res
              .status(400)
              .json(err);
          } else {
            _doAddReview(req, res, application);
          }
        }
      );
    } else {
      res
        .status(404)
        .json({
          "message": "Not found, applicationid required"
        });
    }
  };
  
  const reviewsReadOne = function (req, res) {
    if (req.params && req.params.applicationid && req.params.reviewid) {
        application
        .findById(req.params.applicationid)
        .exec((err, application) => {
          if (!application) {
            res	
              .status(404) 
              .json({	
                "message": "applicationid not found"
              });	 
            return;
          } else if (err) {
            res	
              .status(404) 
              .json(err); 
            return; 	
          }
          if (application.reviews && application.reviews.length > 0) {
            const review = application.reviews.id(req.params.reviewid);
            if (!review) {
              res
                .status(404)
                .json({
                  "message": "reviewid not found"
              });
            } else {
              response = {
                application : {
                  name : application.name,
                  id : req.params.applicationid
                },
                review : review
              };
              res
                .status(200)
                .json(response);
            }
          } else {
            res
              .status(404)
              .json({
                "message": "No reviews found"
            });
          } 
        });
    } else {		
      res		
        .status(404) 	
        .json({	
          "message": "Not found, applicationid and reviewid are both required"
        });		
    }
  };
  
  const reviewsUpdateOne = function (req, res) {
    if (!req.params.applicationid || !req.params.reviewid) {
      res
        .status(404)
        .json({
          "message": "Not found, applicationid and reviewid are both required"
        });
      return;
    }
    application
      .findById(req.params.applicationid)
      .select('reviews')
      .exec((err, application) => {
        if (!application) {
          res
            .status(404)
            .json({
              "message": "applicationid not found"
            });
          return;
        } else if (err) {
          res
            .status(400)
            .json(err);
          return;
        }
        if (application.reviews && application.reviews.length > 0) {
          let thisReview = application.reviews.id(req.params.reviewid);
          if (!thisReview) {
            res
              .status(404)
              .json({
                "message": "reviewid not found"
              });
          } else {
            thisReview.author = req.body.author;
            thisReview.rating = req.body.rating;
            thisReview.reviewText = req.body.reviewText;
            application.save((err, location) => {
              if (err) {
                res
                  .status(404)
                  .json(err);
              } else {
                _updateAverageRating(application._id);
                res
                  .status(200)
                  .json(thisReview);
              }
            });
          }
        } else {
          res
            .status(404)
            json({
              "message": "No review to update"
            });
        }
      }
    );
  };
  
  const reviewsDeleteOne = function (req, res) {
    if (!req.params.applicationid || !req.params.reviewid) {
      res
        .status(404)
        .json({
          "message": "Not found, applicationid and reviewid are both required"
        });
      return;
    }
    application
      .findById(req.params.applicationid)
      .select('reviews')
      .exec((err, application) => {
        if (!application) {
          res
            .status(404)
            .json({
              "message": "applicationid not found"
            });
          return;
        } else if (err) {
          res
            .status(400)
            .json(err);
          return;
        }
        if (application.reviews && application.reviews.length > 0) {
          if (!application.reviews.id(req.params.reviewid)) {
            res
              .status(404)
              .json({
                "message": "reviewid not found"
              });
          } else {
            application.reviews.id(req.params.reviewid).remove();
            application.save((err) => {
              if (err) {
                res
                  .status(404)
                  .json(err);
              } else {
                updateAverageRating(application._id);
                res
                  .status(204)
                  .json(null);
              }
            });
          }
        } else {
          res
            .status(404)
            .json({
              "message": "No review to delete"
            });
        }
      }
    );
  };
  
  // PRIVATE HELPER METHODS
  
  const _doAddReview = function(req, res, application) {
    if (!application) {
      res
        .status(404)
        .json({
          "message": "applicationid not found"
        });
    } else {
        application.reviews.push({
        author: req.body.author,
        rating: req.body.rating,
        reviewText: req.body.reviewText
      });
      application.save((err, application) => {
        if (err) {
          res
            .status(400)
            .json(err);
        } else {
          _updateAverageRating(application._id);
          let thisReview = application.reviews[application.reviews.length - 1];
           res
             .status(201)
             .json(thisReview);
        }
      });
    }
  };
  
  const _updateAverageRating = function(applicationid) {
    application
      .findById(applicationid)
      .select('rating reviews')
      .exec((err, application) => {
        if (!err) {
          doSetAverageRating(application); 
        }
      });
  };
  
  const _doSetAverageRating = function(application) {
    if (application.reviews && application.reviews.length > 0) {
      const reviewCount = application.reviews.length;
      let ratingTotal = 0;
      for (let i = 0; i < reviewCount; i++) {
        ratingTotal = ratingTotal + application.reviews[i].rating;
      }
      let ratingAverage = parseInt(ratingTotal / reviewCount, 10);
      application.rating = ratingAverage;
      application.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Average rating updated to", ratingAverage);
        }
      });
    }
  };
  
  
  module.exports = {
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
  };
