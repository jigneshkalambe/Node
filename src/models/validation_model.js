const mongoose = require("mongoose");

const validation_Schema = mongoose.Schema(
    {
        userName: {
            type: String,
            trim: true,
        },
        userEmail: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const validation_model = mongoose.model("validation", validation_Schema);
module.exports = validation_model;
