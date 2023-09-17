//importin all requirements 
const express = require('express')
const app = express()
const cors = require('cors')
//files uploading
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images')
    },
    filename : (req,file,cb) =>{
        cb(null, Date.now() + '-' + file.originalname)
    },
})
const upload = multer({storage: storage})
module.exports = {upload}
const connectdb = require('./db/connectdb') //db connection fonction 
const routes = require('./routes/routes') //products routes
const NotFound = require('./extra/notfound') //not found handler
const errhandler = require('./extra/errhandler') //err handler
require('dotenv').config()

// midddelwares 
app.use(express.static('public'))
app.use(express.json())
app.use(cors())
app.use('/api/v1/',routes) // link the products routes
//handelers
    app.use(NotFound) //handle wrong route pathes
    app.use(errhandler) //handle server errs
//start the server 
const port = process.env.PORT || 8080
const start = async () => {
    try {
        await connectdb(process.env.MONGO) // connect to db
        app.listen(port , console.log('listenin on port ' + port ))

    }catch(err) {
        console.log(err)
    }
}
start()