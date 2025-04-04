// controllers/examController.js
const Exam = require("../models/Exam");

// Create an exam
exports.createExam = async (req, res) => {
  try {
    const { title, subject, questions, duration } = req.body;

    const exam = new Exam({
      title,
      subject,
      questions,
      duration,
      createdBy: req.user.id,
    });

    await exam.save();
    res.status(201).json({ msg: "Exam created successfully", exam });
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Get all exams
exports.getExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Delete an exam
exports.deleteExam = async (req, res) => {
  try {
    await Exam.findByIdAndDelete(req.params.id);
    res.json({ msg: "Exam deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};
