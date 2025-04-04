// utils/validator.js
const { body, validationResult } = require("express-validator");

// User registration validation
const validateUserRegistration = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];

// Exam creation validation
const validateExamCreation = [
    body("title").notEmpty().withMessage("Title is required"),
    body("subject").notEmpty().withMessage("Subject is required"),
    body("questions").isArray({ min: 1 }).withMessage("At least one question required"),
];

// Middleware to check validation results
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateUserRegistration,
    validateExamCreation,
    handleValidationErrors
};
