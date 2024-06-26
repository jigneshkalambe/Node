const express = require("express");
const router = express();

const cityRoute = require("./city_routes");
const stateRoute = require("./state_routes");
const validRoute = require("./validation_routes");

router.use("/city", cityRoute);
router.use("/state", stateRoute);
router.use("/valid", validRoute);

module.exports = router;
