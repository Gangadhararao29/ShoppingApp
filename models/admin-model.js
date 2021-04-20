const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    userName:String,
    email:String,
    password:String
})

const Admin = mongoose.model('admin',AdminSchema)

module.exports = Admin;