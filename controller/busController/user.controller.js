const express = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("./../../models/user.Model");
const app = express.Router();

app.post("/signup", async (req, res) => {
  try {
    let { email } = req.body;
    if (!email) {
      return res.send({ status: "Failed", message: "Please enter email" });
    }

    if (!req.body.password) {
      return res.send({
        status: "Failed",
        message: "Please enter password",
      });
    }

    if(!req.body.gender){
      return res.send({
        status: "Failed",
        message:"Please enter Gender"
      });
    }

    if(!req.body.role){
      return res.send({
        status: "Failed",
        message:"Please enter Role"
      });
    }
    let user = await User.findOne({ email: email });

    if (user) {
      return res.send({
        status: "Failed",
        message: "Please try with different email",
      });
    }
    const userBody = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
      role: req.body.role,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      zip: req.body.zip,
      phone:  req.body.phone,
      gender: req.body.gender,
      bookedHotels: [],
    }
    // console.log(req.body);
    
    user = await User.create(userBody);


    return res.send({
      status: "Success",
      message: "Signup Successful",
    });
  } catch (error) {
    return res.send({ message: error.message, status: "Failed" });
  }
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  // console.log(req.body);
  try {
    let user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      return res.send({ status: "Failed", message: "Please check your email" });
    }
    if (user.password !== password) {
      return res.send({
        status: "Failed",
        message: "Please check your password",
      });
    }
    if (user && user.password === password) {
      const token = jwt.sign({ user }, "1234");
      return res.send({ status: "Success", message: { user, token } });
    }
  } catch (error) {
    return res.send({ message: error.message, status: "Failed" });
  }
});

module.exports = app;
