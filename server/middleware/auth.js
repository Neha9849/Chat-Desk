const jwt = require('jsonwebtoken')
const config = require('config')
module.exports = function(req,res,next){
    //get token frm req header
    const token = req.header('x-auth-token');
    if(!token){
        return res.status(401).json({msg:'no token! unauthorized'})
    }
    //verify token
    try{
        const decoded = jwt.verify(token,config.get
            ('jwtSecret'));
        req.user=decoded.user;
    }
    catch(err){
  res.status('401').json({msg:'invalid token'})
    }
}