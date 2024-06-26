const express = require("express");
const { city_Controller } = require("../../controllers");
const router = express.Router();

router.post("/city_end", city_Controller.city_post_c);

module.exports = router;
