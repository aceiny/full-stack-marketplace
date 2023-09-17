const User = require('../db/userModel')
const Product = require('../db/ProductModel')
const searchUsername = async (user) => { // fonction to check if username already exist
    const username = await User.find({username : user})
    if(username.length > 0) {
      return true
    }
    return false
}

//get fonctions
const getuserInfo = async (req,res) => {
try {
    const user = await User.findById(req.user.id).select('-password')
    if(user){
        return res.status(200).json(user)
    }
    return res.status(404).json({status : 'not found'})
} catch (error) {
    return res.status(500).json({status : 'server error'})
}
}
const getuserCart = async (req,res) => {
    try{
        const user = await User.findById(req.user.id)
        if(user){
            return res.status(200).json(user.shoppinCart)
        }
    }catch(err){
        return res.status(500).json({status : 'server error'})
    }
}
//post fonctions
const changeProfileImg = async (req,res) => {
    try{
        const user = await User.findById(req.user.id)
        if(user){
            user.profileImg = "images/" + req.files[0].filename
            console.log(user.profileImg)
            await user.save()
            return res.status(200).json({status : 'profile pic changed'})
        }
    }catch(err){
        return res.status(500).json({status : 'server error' , reason : 'No image uploaded'})
    }
}
const addtoCart = async (req,res) => { // add the product _id to the cart
    try{
        if(!req.body.id){
            return res.status(400).json({status : 'id required'})
        }
        const user = await User.findById(req.user.id)
        if(user){
            try{
            const product = await Product.findById(req.body.id)
            if(product){
                user.shoppinCart.push(product)
                await user.save()
                return res.status(200).json({data : product , status : 'added to cart'})
            }}catch(err){
                return res.status(404).json({status : 'not found'})
            }
        }
        return res.status(404).json({status : 'not found'})
    }catch(err){
        return res.status(500).json({status : 'server error'})
    }
}
const removefromCart = async (req,res) => { // the user makes a post request with the product id to remove it from the cart
    try{
        if(!req.body.id){
            return res.status(400).json({status : 'id required'})
        }
        const user = await User.findById(req.user.id)
        if(user){
            const exist = user.shoppinCart.find((item) => item._id.toString() === req.body.id)
            if(!exist){
                return res.status(400).json({status : 'not in cart'})
            }
            user.shoppinCart = user.shoppinCart.filter((item) => item._id.toString() !== req.body.id)
            await user.save()
            return res.status(200).json({status : 'removed from cart'})
        }
        return res.status(404).json({status : 'not found'})
    }
    catch(err){
        return res.status(500).json({status : 'server error'})
    }
}
//patch fonctions
const ChangeInfo = async (req,res) => {
    delete req.body.password // we don't want to change the password here and to avoid any frontend mistakes
try {
    if (req.body.username){
        const usernameTaken = await searchUsername(req.body.username)
        if(usernameTaken){
            return res.status(400).json({status : 'username already taken'})
        }
    }
   const user = await User.findByIdAndUpdate(req.user.id,req.body,{new : true})
    if (user) {
        return res.status(200).json({status : 'updated' , user})
    }
    return res.status(404).json({status : 'not found'})
} catch (error) {
    return res.status(500).json({status : 'server error'})
}
}

const emptyCart = async (req,res) => { // the front end makes a patch request with no body
    try{
        const user = await User.findById(req.user.id)
        if (user) {
            user.shoppinCart = []
            await user.save()
            return res.status(200).json({status : 'cleared the cart'})
        }
        return res.status(404).json({status : 'not found'})
    }catch(err){
        return res.status(500).json({status : 'server error'})
    }
}
//delete fonctions

module.exports = {
    getuserInfo,
    ChangeInfo,
    changeProfileImg,
    getuserCart,
    addtoCart,
    emptyCart,
    removefromCart
}