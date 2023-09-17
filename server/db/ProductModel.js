const {Schema,model} = require('mongoose')
const ProductSchema = new Schema({
    name:{
        type:String,
        required:[true , "name is required"]
    },
    description:{
        type:String,
        default:"no description available"
    },
    price:{
        type:Number,
        required:[true , "price is required"]
    },
    company : {
        type :String,
        required:[true,"company is required"]
    },
    rating:{
        type:Number,
        default:5
    },
    createdAt:{
        type:String,
        default : Date()
    },
    quantity:{
        type:Number,
        required:[true , "quantiy is required"]
    },
    productimages:{
        type:Array,
        required:false
    }
})
module.exports = model('MarketplaceV1',ProductSchema)