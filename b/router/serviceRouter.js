const express = require("express");
const router = express.Router();
const {
  Codingservice,
  getService,
} = require("../controller.js/ServiceController"); // only this is needed
const upload = require("../utils/multer");

router.post("/addservice",upload.single("image"), Codingservice);
router.get("/getservice", getService);

module.exports = router;
