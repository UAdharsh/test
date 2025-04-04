// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "teacher", "student"], required: true },
  createdAt: { type: Date, default: Date.now },
  validated: { type: Boolean, default: false }, // Admin/Teacher must validate accounts
});

module.exports = mongoose.model("User", UserSchema);
