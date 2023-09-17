const Model = require('../db/ProductModel')
// 200 success - 400 empty response - 500 server problem
//get fonctions
const GetProduct = async (req, res) => {
    try {
        const product = await Model.find({ _id: req.params.id });
        if (product.length > 0) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ status: 'not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred' });
    }
};

const GetProducts = async(req,res) => {
    try {
        const nmbrmap = {
        '>': '$gt',
        '>=': '$gte',
        '=': '$eq',
        '<': '$lt',
        '<=': '$lte',
        }
        const {name,numerics,company,sort,limit,page,fields} = req.query
        const QObjects = {} 
        //fill in the Queries object 
            if (name) {
                QObjects.name = {$regex : name , $options : "i"}
            }
            if (company) {
                QObjects.company = {$regex : company , $options : "i"};
            }
            if (numerics) {
                const regEx = /(<=|>=|<|>|=)/g;
                let filters = numerics.replace(
                    regEx, 
                    match => `-${nmbrmap[match]}-`
                );
                const options = ['price','rating','quantity']
                filters = filters.split(',').forEach((v)=>{
                    const [field,comparateur,value] = v.split('-')
                    if (options.includes(field)){
                        QObjects[field] = { [comparateur] : Number(value)}
                    }
                })
            }
        //end fill in the Queries object 

          let result = Model.find(QObjects)
          if (sort) {
            const sortList = sort.split(',').join(' ');
            result = result.sort(sortList);
          }else {
            result = result.sort('createdAt');
          }
          if (fields) {
            const fieldsList = fields.split(',').join(' ');
            result = result.select(fieldsList);
          }
          //pagination 
            const PageLimit = limit || 15
            const Page = page || 1
            const Skip = (Page - 1 ) * PageLimit 
            result = result.skip(Skip).limit(PageLimit)
          //end pagination
          const products = await result
          const NbProducts = await Model.find({})
          const Nbpages = Math.ceil(NbProducts.length/PageLimit)
          res.status(200).json({
            NbAllProducts : NbProducts.length,
            NbPages : Nbpages,
            page : Page,
            NbHits : products.length,
            Products : products,
        })
    } catch (err) {
        res.status(500).json(err)
    }
}
//post fonctions
const AddProduct = async(req,res) => {
    try {
        const fullUrl = `${req.protocol}://${req.hostname}:8080/images/`; //change on deployment
        req.body.productimages = req.files.map((file) => fullUrl+file.filename)
        console.log(req.body)
        const product = await Model.create(req.body)
        if(product) {
            return res.status(200).json({status : 'Product add successfully' , data : product})
        }
        return res.status(400).json({status : 'could not add product'})
    } catch (err) {
        res.status(500).json(err)
    }
}
//patch fonctions
const UpdateProduct = async(req,res) => {
    try {
        const product = await Model.findOneAndUpdate({_id : req.params.id},req.body,{new : true})
        if(product) {
            return res.status(200).json({status : 'updated' , product})
        }
        return res.status(404).json({status : 'not found'})
    } catch (err) {
        res.status(500).json(err)
    }
}
//delete fonctions
const DeleteProduct = async(req,res) => {
    try {
        const product = await Model.findOneAndDelete({_id : req.params.id})
        if(product) {
            return res.status(200).json({status : 'Product deleted' , product})
        }
        return res.status(404).json({status : 'not found'})
    } catch (err) {
        res.status(500).json(err)
    }
}
const DeleteAll = async(req,res) => { //fonction for cleanin all tha database
    try {
        await Model.deleteMany()
        console.log('cleared the database collection')
    } catch (err) {
        console.log(err)
    }
}
//DeleteAll() //only run when you want to clear the whole database collection
module.exports = { //exportin functions to use in the router
    GetProducts,
    AddProduct,
    UpdateProduct,
    GetProduct,
    DeleteProduct
}