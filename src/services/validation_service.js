const { Validation } = require("../models");

const valid_post_method = (data) => {
    return Validation.create(data);
};
const check_valid = (name) => {
    // const check_valid = (name, email) => {
    return Validation.findOne({ userName: name });
    // return Validation.findOne({ userName: name, userEmail: email });
};

module.exports = { valid_post_method, check_valid };
