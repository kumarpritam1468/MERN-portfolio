const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

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

        res.status(201).json({
            msg: userCreated,
            token: userCreated.generateToken(),
            userId: userCreated._id.toString()
        });

    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if(!userExist){
            return res.status(400).json({msg: "Invalid credentials"});
        }

        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({
                msg: "Login Successful",
                token: userExist.generateToken(),
                userId: userExist._id.toString()
            });
        }
        else{
            return res.status(401).json({msg: "Invalid credentials"});
        }

    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({msg:userData});
    } catch (error) {
        console.log("Error from user page : ", error);
    }
}

module.exports = { home, register, login, user };