// routes/results.js
const express = require("express");
const { getResultsByStudent, getResultsByExam } = require("../controllers/resultController");
const auth = require("../middlewares/auth");

const router = express.Router();

// Get student results (Student only)
router.get("/student/:studentId", auth, getResultsByStudent);

// Get results for an exam (Teacher/Admin only)
router.get("/exam/:examId", auth, getResultsByExam);

module.exports = router;
