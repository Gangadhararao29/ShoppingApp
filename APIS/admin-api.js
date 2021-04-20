const express = require ('express')
const adminModel = require('../models/admin-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const adminApiObject = express.Router();

adminApiObject.get('/getadmin',async(req,res)=>{
    const admin = await adminModel.find()

    try {
        res.send({admin});
    }
    catch(err) {
        res.sendStatus(500).send(err);
    }
})

adminApiObject.post("/login", async (req, res) => {

    let loginObj = req.body;
    let adminData = await adminModel.findOne({ userName: loginObj.userName })
  
    let value= await bcrypt.compare(loginObj.password,adminData.password)
    console.log(value)
  
    if (!adminData) {
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

module.exports=adminApiObject;