//
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const logger = require("./utils/logger");
const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const examRoutes = require("./routes/exams");
const resultRoutes = require("./routes/results");
const subjectRoutes = require("./routes/subjects");

// Initialize Express App
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/subjects", subjectRoutes);

// WebSocket Handling
io.on("connection", (socket) => {
    logger.info(`New client connected: ${socket.id}`);
    require("./sockets/examMonitoring")(socket);
    socket.on("disconnect", () => logger.info(`Client disconnected: ${socket.id}`));
});

// Error Handling Middleware
app.use(require("./middlewares/errorHandler"));

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
