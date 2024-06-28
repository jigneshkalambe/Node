const mongoose = require("mongoose");

const nodemailer_Schema = mongoose.Schema(
    {
        name: { type: String, trim: true },
        email: { type: String, trim: true },
    },
    {
        timestamps: true,
    }
);

const nodemailer_model = mongoose.model("Nodemailer", nodemailer_Schema);
module.exports = nodemailer_model;
