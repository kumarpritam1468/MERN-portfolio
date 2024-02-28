const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if(!token){
        res.status(401).json({msg:"Unauthorized Access"});
    }

    const jwtToken = token.replace("Bearer", "").trim();

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_KEY);
        const userData = await User.findOne({email: isVerified.email}).select({password:0});
        
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userId = userData._id;
        next();
    } catch (error) {
        return res.status(401).json({msg:"Unauthorized, Invalid Token!"});
    }
}

module.exports = authMiddleware;