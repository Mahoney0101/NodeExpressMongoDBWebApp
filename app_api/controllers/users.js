const mongoose = require('mongoose');
const user = mongoose.model('User');


const usersCreate = function(req, res) {
       
    user.create({uname: req.body.name, email: req.body.email, password: req.body.password,
      roles: [ { role: 'root', db: 'users' } ]}, function(err,newuser){
      console.log(err);
       if(err){
         res.status(500).send("Username exists");
       } else {
         //res.status(200).send("New User Created");
         res.redirect('/login'); //here the redirect takes place
       }
    })
  
};
// const usersCreate = function (req, res) {
//   const cred = { };
//       cred.uname = req.body.name;
//       cred.email = req.body.email;
//       cred.password = bcrypt.hashSync(req.body.password, 10);
      
//       credentials.insertOne(cred, function(err,newuser){
//          if(err){
//            res.status(500).send("Username exists");
//          } else {
//            //res.status(200).send("New User Created");
//            res.redirect('/login'); //here the redirect takes place
//          }
//       })
//     };
      
  

const usersReadOne = function (req, res) {res
  if (true) {
    user
    .find( { email: 'james.mahoney@students.ittralee.ie'} )
      .exec((err, user) => {
        if (!user) {
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
          .json(user);
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