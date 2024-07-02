const mongoose = require('mongoose');

// Define the schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // Ensure email is unique
  },
  username: {
    type: String,
    required: true,
    unique: true // Ensure username is unique
  },
  password: {
    type: String,
    required: true
  },
  list:[
    {
        type:mongoose.Types.ObjectId,
        ref:"List",
    },
  ],
});

// Create the model
const User = mongoose.model('User', UserSchema);

// Export the model
module.exports = User;
