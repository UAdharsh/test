// utils/helpers.js
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

// Hash a password before saving it to the database
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// Compare a plain text password with the hashed password
const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Generate a random unique ID
const generateUniqueId = () => {
    return crypto.randomBytes(16).toString("hex");
};

// Format a date to a readable format
const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
};

module.exports = { hashPassword, comparePassword, generateUniqueId, formatDate };
