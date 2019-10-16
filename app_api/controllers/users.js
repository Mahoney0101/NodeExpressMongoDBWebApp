const mongoose = require('mongoose');
const user = mongoose.model('User');


const usersCreate = function(req, res) {
       
    user.create({uname: req.body.name, email: req.body.email, password: req.body.password,
      roles: [ { role: 'root', db: 'users' } ]}, function(err,newuser){
      console.log(err);
       if(err){
         res.status(500).send("Username exists");
       } else {
         res.redirect('/login'); //here the redirect takes place
       }
    })
  
};
  
const usersReadOne = function (req, res) {res
  if (true) {
    user
    .find( { email:req.body.email })
      .exec((err, found) => {
        if (!found) {
          res	
            .status(404) 
            .json({	
              "message": "userEmail not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(found);
      });
  }
 };





const usersUpdateOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };
const usersDeleteOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };


 
module.exports = {
  usersCreate,
  usersReadOne,
  usersUpdateOne,
  usersDeleteOne
};