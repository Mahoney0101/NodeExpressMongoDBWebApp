const mongoose = require('mongoose');
const user = mongoose.model('User');


const usersCreate = function (req, res) {user.create({
    name: req.body.name,
    password : req.body.password,
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