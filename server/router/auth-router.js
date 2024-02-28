const express = require("express");
const router = express.Router();
const authControllers = require('../controllers/auth-controller');
const validate = require("../middlewares/validation-middleware");
const Schemas = require("../validators/auth-validation");
const authMiddleware = require("../middlewares/auth-middleware");

router.route('/').get(authControllers.home);

router.route('/register').post( validate(Schemas.registerSchema), authControllers.register);
router.route('/login').post( validate(Schemas.loginSchema), authControllers.login);

router.route('/user').get( authMiddleware, authControllers.user);

module.exports = router;