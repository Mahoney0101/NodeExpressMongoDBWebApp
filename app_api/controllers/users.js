const mongoose = require('mongoose');
const user = mongoose.model('User');

//   app.post('/register', function(req,res){    
//     const cred = { };
//     cred.uname = req.body.name;
//     cred.email = req.body.email;
//     cred.password = bcrypt.hashSync(req.body.password, 10);
//     credentials.insertOne(cred, function(err,newuser){
//        if(err){
//          res.status(500).send("Username exists");
//        } else {
//          //res.status(200).send("New User Created");
//          res.redirect('/login'); //here the redirect takes place
//        }
//     })
//   });
const usersCreate = function (req, res) {
    user.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      
    }, (err, user) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(user);
      }
    });
  };
const usersReadOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
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