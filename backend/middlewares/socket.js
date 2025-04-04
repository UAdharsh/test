// middlewares/socket.js
const socketIO = require("socket.io");

let io;

module.exports = {
  init: (server) => {
    io = socketIO(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket) => {
      console.log(`User connected: ${socket.id}`);

      socket.on("joinExam", (examId) => {
        socket.join(examId);
        console.log(`User joined exam: ${examId}`);
      });

      socket.on("tabSwitch", (data) => {
        io.to(data.examId).emit("tabSwitchAlert", data);
      });

      socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
      });
    });

    return io;
  },

  getIO: () => {
    if (!io) {
      throw new Error("Socket.io not initialized!");
    }
    return io;
  },
};
