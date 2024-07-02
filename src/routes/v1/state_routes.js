const express = require("express");
const { state_Controller } = require("../../controllers");
const router = express.Router();
const jwt = require("jsonwebtoken");

// router.post("/state_end", state_Controller.state_post_c);
router.get("/list", state_Controller.state_get_list);
// router.post("/check", state_Controller.check);
router.post("/create_token", async (req, res) => {
    try {
        const payload = req.body;
        const token = await jwt.sign(payload, "SECRET");
        if (!token) {
            throw new Error("Data not decoded");
        }
        res.status(200).json({
            success: true,
            data: token,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});
router.post("/decode_token", async (req, res) => {
    try {
        const token = req.body.token;
        const data = await jwt.verify(token, "SECRET");
        if (!data) {
            throw new Error("Data not decoded");
        }
        res.status(200).json({
            success: true,
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;
