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
  
const usersReadOne = function (req, res) {
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
          // .json(found);// write code to compare password to req.body.password
          for ( let user of found )
          {
            // Destructuring email and password from the current user
            let { email, password } = user;
            
            // Comparing email and pwd from active user with the ones in object
            if ( email === req.body.email && password === req.body.password )
            {
              // Found, redirect to form
              res.redirect('/form');
            }
            else{
              res
              .status(404)
              .json(err);
              return;
            }
        
      }})
  }
 };








 
module.exports = {
  usersCreate,
  usersReadOne
};