const express = require('express')
let router = express.Router() // get the router from expresss

const {
    GetProducts,
    GetProduct,
    AddProduct,
    UpdateProduct,
    DeleteProduct
        } = require('../functions/products') // get the function that we will use
const {
    register,
    login,
    AdminAuth
} = require('../functions/auth')

const {
    getuserInfo,
    changeProfileImg,
    ChangeInfo,
    getuserCart,
    addtoCart,
    emptyCart,
    removefromCart
} = require('../functions/userData')
const {
    decodeToken
} = require('../functions/middelwares')
const {
    upload
} = require('../app')

//all the products related routes
router.route('/products')
    .get(GetProducts)
    .post(upload.any(),AddProduct)

router.route('/products/:id')
    .get(GetProduct)
    .patch(UpdateProduct)
    .delete(DeleteProduct)

// all the user related routes
router.post('/register',register)
router.post('/login',login)
router.post('/login/admin',AdminAuth)
//user info routes
router.route('/user')
.get(decodeToken,getuserInfo)
.patch(decodeToken,ChangeInfo)
router.post('/updateprofileimg',upload.any(),decodeToken,changeProfileImg)
//cart routes
router.get('/cart',decodeToken,getuserCart)
router.delete('/cart/clear',decodeToken,emptyCart)
router.post('/cart/add',decodeToken,addtoCart)
router.post('/cart/remove',decodeToken,removefromCart)
module.exports = router //export the router 