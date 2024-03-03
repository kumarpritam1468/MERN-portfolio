const express = require("express");
const router = express.Router();
const {allUsers} = require('../controllers/admin-controller');
const {allContacts} = require('../controllers/admin-controller');
const {allServices} = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');

router.route('/users').get(authMiddleware, adminMiddleware, allUsers);
router.route('/contacts').get(authMiddleware, adminMiddleware, allContacts);
router.route('/services').get(authMiddleware, adminMiddleware, allServices);

module.exports = router;