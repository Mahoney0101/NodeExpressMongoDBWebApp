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

function withCredentials(callback) {
  const uri = "mongodb+srv://james:efdfdbf7a413@cluster0-df223.mongodb.net/admin?retryWrites=true&w=majority"
  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  }, function(err, client) {
   if(err) {
     console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   } else {
     console.log('Connected to Atlas');
    const collection = client.db("userdb").collection("credentials");
    callback(collection);
   }
 });
}

const usersCreate = withCredentials(function(credentials) {
  app.post('/register', function(req,res){    
    const cred = { };
    cred.uname = req.body.name;
    cred.email = req.body.email;
    cred.password = bcrypt.hashSync(req.body.password, 10);
    credentials.insertOne(cred, function(err,newuser){
       if(err){
         res.status(500).send("Username exists");
       } else {
         //res.status(200).send("New User Created");
         res.redirect('/login'); //here the redirect takes place
       }
    })
  });
});
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