// controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

// Register a user (Admin, Teacher, or Student)
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    user = new User({ name, email, password, role });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Login a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, role: user.role }, config.get("jwtSecret"), { expiresIn: "1h" });

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Validate user token
exports.validateToken = async (req, res) => {
  res.json({ user: req.user });
};

// Validate a user account (Only Admin or Teacher can do this)
exports.validateUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    let user = await User.findById(id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.isValidated = true; // Assuming you have an `isValidated` field in your User model
    await user.save();

    res.status(200).json({ msg: "User validated successfully", user });
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};
module.exports = { register, login, validateToken, validateUser };
