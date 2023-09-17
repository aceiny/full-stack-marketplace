const errhandler = (err,req,res,next) => {
    res.status(500).json({status : 'Server Breakdown' , reason : err.message})
}
module.exports = errhandler