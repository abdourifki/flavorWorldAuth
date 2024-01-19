const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();



const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

 // check json web token exist and verified
  if(token){
    jwt.verify(token,process.env.JWT_SECRET_KEY, (err, decodedToken)=>{
      if(err){
        res.status(401).json({message:'not token'});        
      }else{
        next();
      }
      
    })
  }
  else{
    res.status(401).json({message:'not token'});
  }
}

module.exports = requireAuth;