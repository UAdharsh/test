// sockets/handlers.js
let activeStudents = [];

// Add a student when they start an exam
const addStudent = (socketId, studentId, examId) => {
    const student = { socketId, studentId, examId };
    activeStudents.push(student);
};

// Remove a student when they leave or disconnect
const removeStudent = (socketId) => {
    activeStudents = activeStudents.filter((student) => student.socketId !== socketId);
};

// Get all active students
const getActiveStudents = () => {
    return activeStudents;
};

module.exports = { addStudent, removeStudent, getActiveStudents };
