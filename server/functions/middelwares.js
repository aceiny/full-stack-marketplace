const jwt = require('jsonwebtoken')
require('dotenv').config()

const decodeToken = (req, res, next) => { // mideelware to decode the token
    const token = req.headers.auth
    if(!token) {
        return res.status(401).json({status: 'no token provided'})
    }
    try {
        const payload = jwt.verify(token, process.env.jwtSECRET)
        req.user = {
            id : payload.id,
            username : payload.username
        }
        next()
    }catch(err){    
        res.status(401).json({status: 'invalid token'})
    }

}
module.exports = {
    decodeToken,
}