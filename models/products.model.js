const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;


let productsSchema = new Schema({
  product: {
    type: String,
    required: [true, 'Product is required field'],
    max: 100,
    unique: true,
    trim: true,
    lowercase: true
  },
  cost: {
    type: Number,
    required: [true, 'Cost is required field']
  },
  description: {
    type: String,
    required: [true, 'Description is required field'],
    max: 200,
    trim: true
  },
  quantity: {
    type: Number,
    required: [true, 'Cost is required field']
  }
});

productsSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Products', productsSchema);
