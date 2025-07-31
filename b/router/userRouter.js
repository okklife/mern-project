const express = require('express');
const { register, login, logout } = require('../controller.js/userController');
const { contactForm } = require('../controller.js/contactController');
const {authentication} = require('../middleware/authentication');
const router = express.Router();

router.post("/signup",register)
router.post("/login",login)
router.post("/contact" ,authentication , contactForm)
router.get("/logout" ,logout)

module.exports = router;