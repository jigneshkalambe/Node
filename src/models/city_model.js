const mongoose = require("mongoose");

const city_Schema = mongoose.Schema(
    {
        city_Name: {
            type: String,
            trim: true,
        },
        city_Code: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const City = mongoose.model("City", city_Schema);

module.exports = City;
