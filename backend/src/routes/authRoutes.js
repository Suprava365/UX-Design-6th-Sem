const express = require('express');
const router = express.Router();
const { 
  register, 
  login, 
  refreshToken,
  forgotPassword, 
  resetPassword, 
  verifyEmail, 
  resendVerification,
  logout,
  verifyResetOTP
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.post('/verify-reset-otp', verifyResetOTP);
router.get('/verify-email/', verifyEmail);
router.post('/resend-verification', resendVerification);
router.post('/logout', protect, logout);

module.exports = router;