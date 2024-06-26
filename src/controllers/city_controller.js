const { city_Service } = require("../services");

const city_post_c = async (req, res) => {
    try {
        const data = req.body;
        const newCity = await city_Service.post_city(data);
        if (!newCity) {
            throw new Error("Failed to create city");
        }
        res.status(200).json({
            success: true,
            data: newCity,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { city_post_c };
