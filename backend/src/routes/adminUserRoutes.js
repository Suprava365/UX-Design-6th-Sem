// routes/adminUserRoutes.js
const express = require('express');
const router = express.Router();
const adminUserController = require('../controllers/adminUserController');
const { protect, authorize } = require('../middleware/auth');

// All routes require admin authentication
router.use(protect);
router.use(authorize('admin'));

// User CRUD operations
router.post('/', adminUserController.createUser);
router.get('/', adminUserController.getAllUsers);
router.get('/stats', adminUserController.getUserStats);
router.get('/activity-logs', adminUserController.getUserActivityLogs);
router.get('/export', adminUserController.exportUsers);
router.post('/import', adminUserController.importUsers);

// Bulk operations
router.post('/bulk-update-roles', adminUserController.bulkUpdateRoles);
router.post('/bulk-deactivate', adminUserController.bulkDeactivateUsers);
router.post('/bulk-delete', adminUserController.bulkDeleteUsers);

// Individual user operations
router.get('/:id', adminUserController.getUserById);
router.put('/:id', adminUserController.updateUser);
router.patch('/:id/password', adminUserController.updateUserPassword);
router.patch('/:id/deactivate', adminUserController.deactivateUser);
router.patch('/:id/reactivate', adminUserController.reactivateUser);
router.delete('/:id', adminUserController.deleteUser);
router.post('/:id/profile-picture', adminUserController.uploadUserProfilePicture);

module.exports = router;