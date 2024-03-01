const Service = require("../models/serviceModel");

const services = async (req, res) => {
    try {
        const response = await Service.find();
        if(!response){
            res.status(500).json({msg: "NO SERVICES"});
            return;
        }

        res.status(200).json(response);
    } catch (error) {
        console.error("Services Error : ", error);
    }
}

module.exports = services;