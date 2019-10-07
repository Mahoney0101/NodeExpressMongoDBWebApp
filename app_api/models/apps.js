const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: String,
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
  FunctionalComponents: [String],
  reviews: [reviewSchema]
});

mongoose.model('Application', applicationSchema);