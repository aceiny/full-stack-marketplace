const {Schema,model} = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const locationSchema = new Schema({
    willaya:String,
    baladiya:String,
    address:String,
    zipCode:String,
})
const UserSchema = new Schema({
    fullname:{
        type:String,
        required:[true , "fullname is required"]
    },
    username : {
        type :String,
        required:[true,"username is required"],
        unique:true
    },
    email:{
        type:String,
        required:[true , "email is required"],
        unique:true
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long']
    },
    location: locationSchema,
    profileImg : {
        type : String,
        default : 'images/default.png'
    },
    favs : {
        type:[],
        default : []
    },
    shoppinCart : {
        type:[],
        default : []
    },
    orders : {
        type:[],
        default : []
    },
    createdAt:{
        type:String,
        default : Date()
    }
})
module.exports = model('User',UserSchema)