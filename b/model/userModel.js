const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{ 
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    password:{
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    isadmin:{
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;