const Contact = require("../model/contactModel");

const contactForm = async (req, res) => {
  try {
    const contactData = req.body;
      await Contact.create(contactData);
    res.status(201).json({
      message: "Contact form submitted successfully",
    });

  } catch (error) {
    res.status(500).json({
      error: error.message, 
    });
  }
};

module.exports = { contactForm };
