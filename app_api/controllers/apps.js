const mongoose = require('mongoose');
const application = mongoose.model('apps');

const _buildapplicationList = function(req, res, results, stats) {
  let application = [];
  results.forEach((doc) => {
    application.push({
      name: doc.obj.name,
      rating: doc.obj.rating,
      _id: doc.obj._id
    });
  });
  return applications;
};

const applicationCreate = function (req, res) {
    application.create({
    name: req.body.name,
  }, (err, application) => {
    if (err) {
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(application);
    }
  });
};

const applicationReadOne = function (req, res) {
  if (req.params && req.params.applicationid) {
    application
      .findById(req.params.applicationid)
      .exec((err, application) => {
        if (!application) {
          res	
            .status(404) 
            .json({	
              "message": "applicationid not found"
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
          .json(application);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No applicationid in request"
      });		
  }
};

const applicationUpdateOne = function (req, res) {
  if (!req.params.applicationid) {
    res
      .status(404)
      .json({
        "message": "Not found, applicationid is required"
      });
    return;
  }
  application
    .findById(req.params.applicationid)
    .select('-reviews -rating')
    .exec((err, application) => {
      if (!application) {
        res
          .json(404)
          .status({
            "message": "applicationid not found"
          });
        return;
      } else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }
      application.name = req.body.name;
      application.save((err, application) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(application);
        }
      });
    }
  );
};

const locationsDeleteOne = function (req, res) {
  const applicationid = req.params.applicationid;
  if (applicationid) {
    application
      .findByIdAndRemove(applicationid) 
      .exec((err, application) => {
          if (err) {
            res
              .status(404)
              .json(err);
            return;
          }
          res
            .status(204)
            .json(null);
        }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "No applicationid"
      });
  }
};

module.exports = {
  applicationListByDistance,
  applicationCreate,
  applicationReadOne,
  applicationUpdateOne,
  applicationDeleteOne
};
