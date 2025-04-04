// routes/users.js
const express = require("express");
const { getUsers, getUserById, deleteUser } = require("../controllers/userController");
const auth = require("../middlewares/auth");

const router = express.Router();

// Get all users (Admin access)
router.get("/", auth, getUsers);

// Get user by ID
router.get("/:id", auth, getUserById);

// Delete user (Admin/Teacher access)
router.delete("/:id", auth, deleteUser);

module.exports = router;
