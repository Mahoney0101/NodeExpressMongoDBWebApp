const mongoose = require('mongoose');
//const Loc = mongoose.model('Location');


const usersCreate = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };
const usersReadOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
    };
const userssUpdateOne = function (req, res) {res
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