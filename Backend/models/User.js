const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Password encryption
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model('User', userSchema);
