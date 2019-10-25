const mongoose = require('mongoose');
const application = mongoose.model('Application');
const Review = mongoose.model('Review');

const reviewsCreate = function (req, res) {
    const app = {name: 'Snapchat'};
    const review = {reviewText: req.body.review, createdOn: Date.now};
    const reviewObj = new Review(review);
    application.findOneAndUpdate(app, {"$push":
    {'reviews': {reviewObj}}}, {useFindAndModify: false})
    .exec((err, found) => {
      if (!found) {
        res	
          .status(404) 
          .json({	
            "message": "app not found"
          });	 
        return;
      } else if (err) {
        res	
          .status(404) 
          .json(err); 
        return; 	
      }
      console.log(found);
      
    })
}    

    

  

  
  
  module.exports = {
     reviewsCreate
    // reviewsReadOne,
    // reviewsUpdateOne,
    // reviewsDeleteOne
  };
