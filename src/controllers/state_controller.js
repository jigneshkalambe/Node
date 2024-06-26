const { State } = require("../models");
const { state_Service } = require("../services");

const state_post_c = async (req, res) => {
    try {
        const data = req.body;
        const newState = await state_Service.post_state(data);
        if (!newState) {
            throw new Error("Failed to create new state");
        }
        res.status(200).json({
            message: "State created successfully",
            data: newState,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const state_get_list = async (req, res) => {
    try {
        // const id = req.body.id;
        const newState = await State.find().populate("city");
        // if (!newState) {
        //     throw new Error("Failed to create new state");
        // }
        // console.log(newState);
        res.status(200).json({
            message: "State created successfully",
            data: newState,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

const check = async (req, res) => {
    try {
        const data = req.body.state_Name;
        const newData = await state_Service.check_s(data);
        if (!newData) {
            throw new Error("Data does not exist");
        }

        res.status(200).json({
            success: true,
            message: "Data found",
            data: newData,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// const token = async (req, res) => {
//     const data = req.body;
//     const token = await
// };
module.exports = { state_post_c, state_get_list, check };
