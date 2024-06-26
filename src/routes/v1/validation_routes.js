const express = require("express");
const { valid_Service } = require("../../services");
const router = express.Router();

router.post("/post_Valid", async (req, res) => {
    try {
        const { userName, userEmail } = req.body;
        // const userName = req.body.userName;
        const validation = await valid_Service.check_valid(userName);
        // const validation = await valid_Service.check_valid(userName, userEmail);
        if (validation) {
            throw new Error(`${userName} and ${userEmail} is already in use`);
        }
        const newUser = await valid_Service.valid_post_method(req.body);
        res.status(200).json({
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;
