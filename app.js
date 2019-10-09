var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var bcrypt = require('bcryptjs');
require('./app_api/models/db');

const index = require('./app_server/routes/index');
const apiRoutes = require('./app_api/routes/index');
const apiRoutesUser = require('./app_api/routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/api', apiRoutes);
app.use('/api', apiRoutesUser);
// app.use('/users', users);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var dbConn = function() {
  return new Promise((resolve, reject) => {
      mongodb.MongoClient.connect('mongodb+srv://james:efdfdbf7a413@cluster0-df223.mongodb.net/admin?retryWrites=true&w=majority',  { useNewUrlParser: true, useUnifiedTopology: true  },
      (err, client) => {
        // Client returned
        var db = client.db('users');
    });
  });
}



// function withCredentials(callback) {
//   const uri = "mongodb+srv://james:efdfdbf7a413@cluster0-df223.mongodb.net/admin?retryWrites=true&w=majority"
//   MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  }, function(err, client) {
//    if(err) {
//      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    } else {
//      console.log('Connected to Atlas');
//     const collection = client.db("userdb").collection("credentials");
//     callback(collection);
//    }
   
//  });
// }

// withCredentials(function(credentials) {
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
// });

// app.get('/register',  function(req, res) {
//     dbConn.then(function(db) {
//         db.collection('users').find({}).toArray().then(function(feedbacks) {
//             res.status(200).json(feedbacks);
//         });
//     });
// });

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );

module.exports = app;