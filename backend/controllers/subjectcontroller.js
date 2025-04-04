// controllers/subjectController.js
const Subject = require("../models/Subject");

// Create a new subject
exports.createSubject = async (req, res) => {
  try {
    const { name } = req.body;

    let subject = await Subject.findOne({ name });
    if (subject) return res.status(400).json({ msg: "Subject already exists" });

    subject = new Subject({ name, createdBy: req.user.id });

    await subject.save();
    res.status(201).json({ msg: "Subject created successfully", subject });
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Get all subjects
exports.getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};
