const { City } = require("../models");

const post_city = (data) => {
    return City.create(data);
};

module.exports = { post_city };
