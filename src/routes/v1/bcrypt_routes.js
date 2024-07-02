const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/bcrypt_hash", async (req, res) => {
    try {
        const password = req.body.password;
        let bcrypt_convert = await bcrypt.hash(password, 8);
        console.log(bcrypt_convert);

        if (!bcrypt_convert) {
            throw new Error("password didnt convert in hash");
        }

        res.status(200).json({
            message: "bcrypt post",
            success: true,
            bcrypt_convert,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

router.post("/bcrypt_compare", async (req, res) => {
    try {
        const hash_password = req.body.hash_password;
        const original_password = "$2b$08$eR1zxaU59Z/uUtJaimLkWOCOTuXk8WAvXlghRXRyQB3dbe3nNmsOm";
        const bcrypt_compare = await bcrypt.compare(hash_password, original_password);
        console.log(bcrypt_compare);
        if (!bcrypt_compare) {
            throw new Error("password didnt match");
        }

        res.status(200).json({
            success: true,
            message: "password matched successfully",
            data: bcrypt_compare,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;
