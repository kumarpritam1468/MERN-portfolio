const express = require("express");
const router = express.Router();
const authControllers = require('../controllers/auth-controller');
const validate = require("../middlewares/validation-middleware");
const Schemas = require("../validators/auth-validation");

router.route('/').get(authControllers.home);

router.route('/register').post( validate(Schemas.registerSchema), authControllers.register);
router.route('/login').post( validate(Schemas.loginSchema), authControllers.login);

module.exports = router;