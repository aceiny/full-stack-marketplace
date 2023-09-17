const User = require('../db/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const capitalize = (str) => {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
} 

const comparePASS = (pass,hashpass) => { // fonction to check if the password is correct
  try{
    return bcrypt.compareSync(pass, hashpass)
  }catch(err){
    console.log(err)
  }
}
//end
const createToken = (user) => { //fonction to generate jwt token 
  return jwt.sign({id : user._id,username:user.username},process.env.jwtSECRET,{expiresIn: process.env.jwtLIFETIME})
}
//end
const searchEmail = async (em) => { //fonction to check if email already exist
  const email = await User.find({email : em})
  if(email.length > 0) {
    return true
  }
  return false
}
//end
const searchUsername = async (user) => { // fonction to check if username already exist
  const username = await User.find({username : user})
  if(username.length > 0) {
    return true
  }
  return false
}
//end
const register = async (req, res) => { // fonction to add user to a database (register)
  try {
    const {fullname,email,username,password} = req.body
    // check if email or username already exist
      const emailTaken =  await searchEmail(email)
      const usernameTaken = await searchUsername(username)
      if(!fullname || !email || !username || !password) {
        return res.status(400).json({status: 'fullname, email, username and password are required'})
      }
      if(usernameTaken) {
        return res.status(400).json({status: 'username already exist'})
      }
      if(emailTaken) {
        return res.status(400).json({status: 'email already exist'})
      }
    // end check
    // hash the password and create the user
      const salt = bcrypt.genSaltSync(10)
      const info = {
        ...req.body,
       fullname:capitalize(fullname),
        password: bcrypt.hashSync(password, salt),
      }
      const user = await User.create(info)
      if(user) {
        return res.status(200).json({status : "Account created"})
      }
      return res.status(400).json({status: 'could not create user'})
    // end create user
  } catch (err) {
    console.log(err)
    res.status(500).json({err})
  }
}
//end
const login = async (req, res) => { //fonction to check if user exist and send the user token (login)
  const {username, password} = req.body
  if(!username || !password) {
    return res.status(400).json({status: 'username and password are required'})
  }
  try {
    const user = await User.find({username})
    if(user.length > 0 ){
      const passwordCorrect = await comparePASS(password,user[0].password)
      if(passwordCorrect) {
        const token = createToken(user[0])
        return res.status(200).json({status: 'logged in' ,id : user._id ,username, token})
      }
      return res.status(400).json({status: 'password is wrong'})
    }
    return res.status(400).json({status: 'username is wrong'})
  } catch (err) {
    res.status(500).json(err)
  }
}
//end
const AdminAuth = (req,res) => {
  const {username , password} = req.body
  if (!username){
    return res.status(400).json({status: 'username is required'})
  }
  else if(!password) {
    return res.status(400).json({status: 'password is required'})
  }
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const token = createToken({
      id : 0 , 
      username : process.env.ADMIN_USERNAME
    })
    return res.status(200).json({status: 'logged in as Admin' ,username, token})
  }
  else {
    return res.status(400).json({status: 'username or password is wrong'})
  }
}
/*const DeleteAll = async (req, res) => { // fonction for cleanin all tha database
  await User.deleteMany()
  console.log('cleared the database collection')
}*/
//DeleteAll() //only run when you want to clear the whole database collection
module.exports = {
  register,
  login,
  AdminAuth
}