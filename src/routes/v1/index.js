const express = require("express");
const router = express();

const cityRoute = require("./city_routes");
const stateRoute = require("./state_routes");
const validRoute = require("./validation_routes");
const nodemailerRoute = require("./nodemailer_routes");
const bcryptRoute = require("./bcrypt_routes");

router.use("/city", cityRoute);
router.use("/state", stateRoute);
router.use("/valid", validRoute);
router.use("/mailer", nodemailerRoute);
router.use("/bcrypt", bcryptRoute);

module.exports = router;
