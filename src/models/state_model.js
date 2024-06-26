const mongoose = require("mongoose");

const state_Schema = mongoose.Schema(
    {
        state_Name: {
            type: String,
            trim: true,
        },
        state_Code: {
            type: Number,
            default: 0,
        },
        city: {
            type: mongoose.Types.ObjectId,
            ref: "City",
        },
    },
    { timestamps: true }
);

const state_model = mongoose.model("State", state_Schema);

module.exports = state_model;
