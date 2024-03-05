const express = require("express");
const router = express.Router();
const {allUsers} = require('../controllers/admin-controller');
const {allContacts} = require('../controllers/admin-controller');
const {allServices} = require('../controllers/admin-controller');
const {deleteUserById} = require('../controllers/admin-controller');
const {getUserById} = require('../controllers/admin-controller');
const {updateUserById} = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');

router.route('/users').get(authMiddleware, adminMiddleware, allUsers);
router.route('/users/:id/get').get(authMiddleware, adminMiddleware, getUserById);
router.route('/contacts').get(authMiddleware, adminMiddleware, allContacts);
router.route('/services').get(authMiddleware, adminMiddleware, allServices);
router.route('/users/update/:id').patch(authMiddleware, adminMiddleware, updateUserById);
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, deleteUserById);

module.exports = router;