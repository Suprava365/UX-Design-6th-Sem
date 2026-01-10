// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const crypto = require('crypto');

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, unique: true, required: true, lowercase: true },
//   password: { type: String, required: true, select: false },
//   role: { type: String, enum: ['admin', 'staff', 'doctor', 'patient'], default: 'patient' },
//   isEmailVerified: { type: Boolean, default: false },
//   emailVerificationToken: String,
//   emailVerificationExpires: Date,
//   passwordResetToken: String,
//   passwordResetExpires: Date,
//   refreshToken: String,
//   lastLogin: Date,
//   resetOTPToken: String,
//   resetOTPExpires: Date,
//   resetOTPVerified: { type: Boolean, default: false },

//   passwordResetToken: String,
//   passwordResetExpires: Date,
//   isActive: { type: Boolean, default: true },
//   createdAt: { type: Date, default: Date.now }
// });

// UserSchema.pre('save', async function () {
//   if (!this.isModified('password')) return;

//   const salt = await bcrypt.genSalt(12);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// UserSchema.methods.matchPassword = async function (entered) {
//   return bcrypt.compare(entered, this.password);
// };

// UserSchema.methods.createPasswordResetToken = function () {
//   const resetToken = crypto.randomBytes(32).toString('hex');
//   this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
//   this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
//   return resetToken;
// };

// UserSchema.methods.createEmailVerificationToken = function () {
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   this.emailVerificationToken = crypto
//     .createHash('sha256')
//     .update(otp)
//     .digest('hex');

//   this.emailVerificationExpires = Date.now() + 10 * 60 * 1000; // 10 min

//   return otp;
// };

// UserSchema.methods.createRefreshToken = function () {
//   const refreshToken = crypto.randomBytes(40).toString('hex');
//   this.refreshToken = crypto.createHash('sha256').update(refreshToken).digest('hex');
//   return refreshToken;
// };

// module.exports = mongoose.model('User', UserSchema);



// Update User model to include profilePicture and deactivatedAt
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: true, select: false },
  role: { type: String, enum: ['admin', 'staff', 'doctor', 'patient'], default: 'patient' },
  phone: String,
  profilePicture: String,
  isEmailVerified: { type: Boolean, default: false },
  emailVerificationToken: String,
  emailVerificationExpires: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  refreshToken: String,
  lastLogin: Date,
  resetOTPToken: String,
  resetOTPExpires: Date,
  resetOTPVerified: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  deactivatedAt: Date,
  createdAt: { type: Date, default: Date.now }
});

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (entered) {
  return bcrypt.compare(entered, this.password);
};

UserSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

UserSchema.methods.createEmailVerificationToken = function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  this.emailVerificationToken = crypto
    .createHash('sha256')
    .update(otp)
    .digest('hex');

  this.emailVerificationExpires = Date.now() + 10 * 60 * 1000; // 10 min

  return otp;
};

UserSchema.methods.createRefreshToken = function () {
  const refreshToken = crypto.randomBytes(40).toString('hex');
  this.refreshToken = crypto.createHash('sha256').update(refreshToken).digest('hex');
  return refreshToken;
};

module.exports = mongoose.model('User', UserSchema);