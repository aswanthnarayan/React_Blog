const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


// In Express.js, routers are used to handle different sets of routes for your application. They allow you to organize your routes and handlers into separate modules or files, making your code more maintainable and easier to understand.

//REGISTER

router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const newUser = new User(
      {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      }
    );
    const user = await newUser.save() //save is a function comes from mongoose to save data to db
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
})


//LOGIN 

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }); // checking for user existed or not
    if (!user) {
      return res.status(400).json("Wrong Credentials!"); // send response and return to exit the function
    }


    const validated = await bcrypt.compare(req.body.password, user.password); //comaprison of password
    if (!validated) {
      return res.status(400).json("Wrong Credentials!"); // send response and return to exit the function
    }
    const { password, ...others } = user._doc
    res.status(200).json(others)

  } catch (error) {
    res.status(500).json(error)
  }
})


// Validate Password
router.post('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ isValid: false, message: 'User not found' });
    }

    const validated = await bcrypt.compare(req.body.password, user.password);

    if (!validated) {
      return res.status(200).json({ isValid: false, message: 'Incorrect current password' });
    }

    res.status(200).json({ isValid: true, message: 'Current password is valid' });
  } catch (error) {
    res.status(500).json({ isValid: false, message: 'Internal server error' });
  }
});



module.exports = router