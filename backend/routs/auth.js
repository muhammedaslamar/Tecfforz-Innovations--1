const express = require('express');
const router = express.Router();
const User=require('../models/user')
var bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');

JWT_SECRET='aslamkkakey'

// Route to register a new account
router.post('/register', async (req, res) => {
  const { email, username, password } = req.body;

  try {
      // Check if the username or email already exists
      const existingUser = await User.findOne({ $or: [{ email }, { username }] });
      if (existingUser) {
          return res.status(400).json({ message: "Email or username already exists" });
      }

      // Hash the password
      const hashedPassword = bcrypt.hashSync(password, 10);

      // Create a new user instance
      const user = new User({
          email,
          username,
          password: hashedPassword
      });

      // Save the user to the database
      await user.save();

      res.status(200).json({ message: "Signup successful" });
  } catch (err) {
      res.status(500).json({ message: "Server error, please try again later" });
  }
});

  // Route to Login account
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      user= await User.findOne({email:req.body.email})
      if(!user){
        res.status(200).json({message:"User Is not exist"});
      }

      const isPwdCorrect=bcrypt.compareSync(
        req.body.password,
        user.password
      )

      if(!isPwdCorrect){
        res.status(200).json({message:"Passsword is incorrect"});
      }

      const {password,...others}=user._doc


      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token:token,others:others});

    } catch (err) 
    {
      res.status(200).json({message:"Is alredy exist"});
    }
  });

 
      

  
module.exports=router;