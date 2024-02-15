const contact = require("../models/contactModel");

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await contact.create(response);
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = contactForm;