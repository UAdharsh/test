// models/Result.js
const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
  score: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  attemptedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Result", ResultSchema);
