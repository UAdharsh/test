// controllers/resultController.js
const Result = require("../models/Result");

// Submit exam result
exports.submitResult = async (req, res) => {
  try {
    const { examId, score, totalMarks } = req.body;

    const result = new Result({
      student: req.user.id,
      exam: examId,
      score,
      totalMarks,
    });

    await result.save();
    res.status(201).json({ msg: "Result submitted successfully", result });
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Get results for a student
exports.getStudentResults = async (req, res) => {
  try {
    const results = await Result.find({ student: req.user.id }).populate("exam");
    res.json(results);
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Get all results for a teacher (Admin/Teacher only)
exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find().populate("student exam");
    res.json(results);
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};
