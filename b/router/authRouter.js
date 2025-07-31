const express = require('express');
const { home } = require('../controller.js/authController');
const router = express.Router();

router.get("/",home);




module.exports = router;