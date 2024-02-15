const express = require("express");
const contactForm = require("../controllers/contact-controller");
const router = express.Router();
const validate = require("../middlewares/validation-middleware");
const contactSchema = require("../validators/form-validation");

router.route("/contact").post( validate(contactSchema) ,contactForm);

module.exports = router;