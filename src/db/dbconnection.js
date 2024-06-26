const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
        .connect(`mongodb+srv://jigneshkalambe63:tfvFPaRZWnGB7CV0@netflix.qlx9rct.mongodb.net/node_features`)
        .then((res) => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDB;
