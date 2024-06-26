const { State } = require("../models");

const post_state = (data) => {
    return State.create(data);
};

const check_s = (state_Name) => {
    return State.findOne({ state_Name });
};

module.exports = {
    post_state,
    check_s,
};
