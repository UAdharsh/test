// routes/exams.js
const express = require("express");
const { createExam, getExams, takeExam } = require("../controllers/examController");
const auth = require("../middlewares/auth");

const router = express.Router();

// Create a new exam (Teacher only)
router.post("/", auth, createExam);

// Get all exams
router.get("/", auth, getExams);

// Take an exam (Student only)
router.post("/take/:examId", auth, takeExam);

module.exports = router;
