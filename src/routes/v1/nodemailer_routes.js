const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/nodemailer", async (req, res) => {
    try {
        const transport = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "jigneshkalambe63@gmail.com",
                pass: "tetaplpenspwysll",
            },
        });

        const mail_sent = transport.sendMail({
            from: "jigneshkalambe63@gmail.com",
            to: "kalambeji@gmail.com",
            subject: "just trying nodemailer",
            text: "learing nodemailer",
        });

        if (!mail_sent) {
            throw new Error("mail didnt sent");
        }

        res.status(200).json({
            success: true,
            message: "nodemailer worked correctly",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;
