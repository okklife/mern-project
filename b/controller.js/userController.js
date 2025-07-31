const User = require("../model/userModel");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { generateToken } = require("../utils/jwTken");

const register = async (req, res) => {
  try {
    const data = req.body;
    if (!validator.isEmail(data.email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    if (await User.findOne({ email: data.email })) {
      return res.status(400).json({ error: "Email already exists" });
    }
       if (await User.findOne({ phone: data.phone })) {
         return res.status(400).json({ error: "Phone no alredy used" });
       }


    const hashPassword = await bcrypt.hash(data.password, 10);
    const userData = {
      ...data,
      password: hashPassword,
    };
    await User.create(userData);
    res
      .status(201)
      .json({
        message: "User registered successfully",
      });
  } catch (error) { 
    res.status(500).json({
      error: "Internal server error",
    });
  }
};


// login 
const login = async (req, res) => {
  try {
    const data = req.body;

  if(!data.email || !data.password){
    return res.status(400).json({
      error :"Enter All fields"
    })
  }
    if (!validator.isEmail(data.email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    if (!data.password) {
      return res.status(400).json({ error: "Password is required" });
    }
    const user = await User.findOne({ email: data.email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const comparepassword = await bcrypt.compare(data.password, user.password);
    if (comparepassword) {
      const token = generateToken(user); 
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxage: 24 * 60 * 60 * 1000, // 1 day
      });
      res.status(200).json({
        message: "Login successful",
        token,
        id: user._id.toString(),
      });
    } else {
      return res.status(400).json({ error: "Invalid password" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const logout = (req, res) => {
  try{
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });

  }
  catch(error){
    res.status(500).json({ error: error.message });
  }
}

module.exports = { register, login,logout };

