const mongoose = require("mongoose");

const token_Schema = mongoose.Schema({
    token_name: {
        type: String,
        trim: true,
    },
});
