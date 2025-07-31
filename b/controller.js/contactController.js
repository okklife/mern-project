const Contact = require("../model/contactModel");
const User = require("../model/userModel");

const contactForm = async (req, res) => {
  try {
    const contactData = req.body;
      await Contact.create(contactData);
      const email =req.user.user.email
      const user =await User.findOne({email :email})
    res.status(201).json({
     user,
      message: "Contact form submitted successfully",
    });

  } catch (error) {
    res.status(500).json({
      error: error.message, 
    });
  }
};

module.exports = { contactForm };
