// models/User.js
const mongoose = require('mongoose');

// Define the schema
const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'], // Enum to restrict the gender values
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  image: {
    type: String // URL or path to the image
  },
  user:[
    {
        type:mongoose.Types.ObjectId,
        ref:"User",
    },
  ],

},{timestamps:true}
);

// Create the model
const List = mongoose.model('List', ListSchema);

// Export the model
module.exports = List;
