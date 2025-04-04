// models/Exam.js
const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      options: [{ text: String, isCorrect: Boolean }],
    },
  ],
  duration: { type: Number, required: true }, // in minutes
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Exam", ExamSchema);
