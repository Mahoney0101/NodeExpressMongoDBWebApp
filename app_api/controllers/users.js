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
  


 const usersReadOne = function(req, res) {
   const username = req.body.email;
   const userSearch = {email:req.body.email};
   const password = req.body.password;
   const loginUser = user.find(userSearch);
   loginUser.exec(function(err, users){
     if (err || Object.entries(users).length === 0){
      res.render('register');
     }
     else{
       console.log(users);
      for ( let user of users )
                {
                  if (user.email.toString() == username.toString() && user.password.toString() == password.toString())
                  {
                    res.render('form');  
                  }
                  else{
                  res.render('login');
                  }
     }
   }})}
 
module.exports = {
  usersCreate,
  usersReadOne
};