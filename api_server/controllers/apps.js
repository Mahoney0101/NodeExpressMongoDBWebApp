const mongoose = require('mongoose');
//const  = mongoose.model('Location');
const appsCreate = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };
const appsReadOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
    };
const appsUpdateOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };
const appsDeleteOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };

module.exports = {
  appsCreate,
  appsReadOne,
  appsUpdateOne,
  appsDeleteOne
};
