const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    const payload = {
    user
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d", // Token valid for 1 day
    });

    return token;


}
module.exports = { generateToken };