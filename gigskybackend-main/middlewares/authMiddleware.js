const jwt = require("jsonwebtoken");
const revokedTokens = [];

const revokeToken = async (token)=>{
    revokedTokens.push(token);
}

function isRevoked(token){
    if(revokedTokens.includes(token)){
        return true
    }
}

const tokenCheck = async (req, res, next) => {


  try{
    const token = req.header("Authorization").replace("Bearer ", "");
    let check = isRevoked(token);
    if(check){
      return res.status(401).json({ message: 'Token is invalid/Revoked' });
    }
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
      req.user = decoded;
      next();
    } catch (error) {
      res.status(404).json({ message: 'Token is invalid' });
    }
};

module.exports = {
  tokenCheck,
  revokeToken 
}