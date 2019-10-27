const mongoose = require('mongoose');
const application = mongoose.model('Application');
const Review = mongoose.model('Review');

const reviewsCreate = function (req, res) {
    const app = {name: req.body.Application};
    const review = {reviewText: req.body.review, createdOn: Date.now};
    const reviewObj = new Review(review);
    application.findOneAndUpdate(app, {"$push":
    {'reviews': reviewObj}}, {useFindAndModify: false})
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
      res.redirect('/reviews')
      
    })
}

 const getAppList = function(req,res){
    const filter = {};
    const all = application.find(filter);
    all.exec(function (err, list) {
      if (err) {
        return handleError(err);
      }
      else{
        res.render('../../app_server/views/reviews',  { 
            list: list})
            console.log(list[0])
           
        
      }
    });
}
     


 

    

  

  
  
  module.exports = {
     reviewsCreate,
     getAppList
  };
