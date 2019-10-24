const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
  reviewText:{ 
  type: String,
  required: true},
  createdOn: {
    type: Date,
    'default': Date.now
  }
});

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  reviews: [reviewSchema]
});

mongoose.model('Application', applicationSchema);