const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL;  
const connectDB = async()=>{
    try{
        await mongoose.connect(mongoUrl)
        console.log("MongoDB connected successfully");  
    }
    catch(err){
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit the process with failure
    }
}
 
module.exports = {connectDB};