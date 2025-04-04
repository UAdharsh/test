// routes/subjects.js
const express = require("express");
const { createSubject, getSubjects } = require("../controllers/subjectController");
const auth = require("../middlewares/auth");

const router = express.Router();

// Create a new subject (Teacher only)
router.post("/", auth, createSubject);

// Get all subjects
router.get("/", auth, getSubjects);

module.exports = router;
