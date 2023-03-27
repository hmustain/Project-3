const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      required: true
    }
  }, { timestamps: true });
  
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
