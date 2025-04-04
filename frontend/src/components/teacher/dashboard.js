import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Teacher Dashboard</h2>
            <div className="grid grid-cols-2 gap-4">
                <Link to="/teacher/create-exam" className="p-4 bg-blue-500 text-white rounded-lg">Create Exam</Link>
                <Link to="/teacher/exams" className="p-4 bg-green-500 text-white rounded-lg">Manage Exams</Link>
                <Link to="/teacher/students" className="p-4 bg-purple-500 text-white rounded-lg">Manage Students</Link>
                <Link to="/teacher/results" className="p-4 bg-yellow-500 text-white rounded-lg">Analyze Results</Link>
            </div>
        </div>
    );
};

export default Dashboard;
