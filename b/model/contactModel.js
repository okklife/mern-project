const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    message:{
        type: String,
        required: true,
        minlength: [10, 'Message must be at least 10 characters long'],
    }
})

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;