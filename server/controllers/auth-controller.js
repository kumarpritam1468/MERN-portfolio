const User = require("../models/userModel");

const home = async (req, res) => {
    try {
        res.status(200).send("Hello there!");
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        const userCreated = await User.create({ name, phone, email, password });

        res.status(200).json({ userCreated });

    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = { home, register };