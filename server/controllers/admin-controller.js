const User = require('../models/userModel');
const Contact = require('../models/contactModel');
const Service = require('../models/serviceModel');

const allUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const allContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No Messages Found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}

const allServices = async (req, res, next) => {
    try {
        const services = await Service.find();
        if (!services || services.length === 0) {
            return res.status(404).json({ message: "No Services Found" });
        }
        return res.status(200).json(services);
    } catch (error) {
        next(error);
    }
}

const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        res.status(200).json({ message: "User deleted Successfully" });
    } catch (error) {
        next(error);
    }
}

module.exports = { allUsers, allContacts, allServices, deleteUserById };