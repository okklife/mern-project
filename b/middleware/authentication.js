const jwts = require("jsonwebtoken");
const securekey = process.env.JWT_SECRET_KEY;

const authentication = (req, res,next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Login First" });
    }
    const decoded = jwts.verify(token, securekey);
    if(decoded){
      req.user = decoded
      next();
    }
  
  } catch (error) {
    return res.status(403).json({ message: error.message });
  }
};

module.exports = {authentication}
