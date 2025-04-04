// routes/auth.js
const express = require("express");
const { login, register, validateUser } = require("../controllers/authController");
const auth = require("../middlewares/auth");

const router = express.Router();

// Register a new user (Student or Teacher)
router.post("/register", register);

// Login
router.post("/login", login);

// Validate User Account (Only Admin or Teacher)
router.put("/validate/:id", auth, validateUser);

module.exports = router;
