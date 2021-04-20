const express = require('express')
const bcrypt = require('bcryptjs')
const userModel = require('../models/user-model')
const jwt = require("jsonwebtoken")

const userApiObject = express.Router();


//import validate token middleware
// const validateToken=require("./middlewares/verifyToken")

userApiObject.get('/getuser', async (req, res) => {
  const user = await userModel.find()

  try {
    res.send({ user });
  }
  catch (err) {
    res.sendStatus(500).send(err);
  }
})

userApiObject.post('/createuser', async (req, res) => {

  // const prevData = await userModel.findOne({ "Id": (req.body.Id * 1) })
  const prevData = await userModel.findOne({ "userName": req.body.userName })
  if (!prevData) {

    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const user = new userModel(req.body);

    try {
      await user.save();
      res.send({ message: "New User Added" });
    }
    catch (err) {
      res.status(500).send(err);
    }
  }
  else {
    res.status(200).send({ message: "User Id already exists" })
  }
});

userApiObject.delete('/getuser/:Id', async (req, res) => {
  try {
    const user = await userModel.deleteOne({ "Id": (req.params.Id * 1) })
    if (!user) res.status(404).send("No item found")
    res.status(200).send({ message: "User deleted successfully", user });
  } catch (err) {
    res.status(500).send(err)
  }
})

userApiObject.patch('/getuser/:Id', async (req, res) => {
  try {
    const user = await userModel.updateOne({ Id: req.params.Id * 1 }, { Name: req.body.Name, Price: req.body.Price, Brand: req.body.Brand })
    await userModel.save()
    res.status(200).send(user)
  }
  catch (err) {
    res.status(500).send(err)
  }
})


userApiObject.post("/login", async (req, res) => {

  let loginObj = req.body;
  let userData = await userModel.findOne({ userName: loginObj.userName })

  let value= await bcrypt.compare(loginObj.password,userData.password)
  console.log(value)

  console.log("userdata", userData, !userData);
  if (!userData) {
    res.send({ message: "Username not found" })
  }
  else if (value) {
    let signedToken = await jwt.sign({ userName: loginObj.userName }, process.env.SECRET, { expiresIn: 600 })
    res.send({ message: "login successful", token: signedToken, userName: loginObj.userName })
  }
  else {
    res.send({ message: "Invalid password" })
  }

})


module.exports = userApiObject;