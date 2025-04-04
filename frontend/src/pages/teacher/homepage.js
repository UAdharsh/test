import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Teacher Dashboard</h2>
            <div className="grid grid-cols-3 gap-4">
                <Link to="/teacher/create-exam" className="bg-blue-500 text-white p-4 rounded">Create Exam</Link>
                <Link to="/teacher/subjects" className="bg-green-500 text-white p-4 rounded">View Subjects</Link>
                <Link to="/teacher/students" className="bg-yellow-500 text-white p-4 rounded">Manage Students</Link>
                <Link to="/teacher/monitoring" className="bg-purple-500 text-white p-4 rounded">Monitor Exams</Link>
                <Link to="/teacher/results" className="bg-red-500 text-white p-4 rounded">Analyze Results</Link>
            </div>
        </div>
    );
};

export default HomePage;
