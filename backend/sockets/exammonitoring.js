// sockets/examMonitoring.js
const { addStudent, removeStudent, getActiveStudents } = require("./handlers");

module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("New user connected:", socket.id);

        // Student joins an exam
        socket.on("joinExam", ({ studentId, examId }) => {
            addStudent(socket.id, studentId, examId);
            io.emit("updateActiveStudents", getActiveStudents());
        });

        // Detecting tab switches
        socket.on("tabSwitch", ({ studentId }) => {
            io.emit("tabSwitchDetected", { studentId });
        });

        // Student disconnects (Exam submission or lost connection)
        socket.on("disconnect", () => {
            removeStudent(socket.id);
            io.emit("updateActiveStudents", getActiveStudents());
        });
    });
};
