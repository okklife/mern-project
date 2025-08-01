const Course = require("../model/ServiceModel");

const Codingservice = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const imageUrl = `uploads/${req.file.filename}`;
 
    const imageFile = req.file;
    if (!imageFile) {
      return res.status(400).json({ message: "Image is required" });
    }

    const course = await Course.create({
      name,
      price,
      description,
       image: imageUrl, // or use path if needed
    });

    res.json({
      message: "Entered successfully",
      course,
      
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
const getService = async (req, res) => {
  const data = await Course.find();
  res.json({
    message: "get all data",
    data,
  });
};

module.exports = { Codingservice, getService };
