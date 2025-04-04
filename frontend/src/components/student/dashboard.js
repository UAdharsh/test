import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
            <div className="grid grid-cols-2 gap-4">
                <Link to="/student/exams" className="p-4 bg-blue-500 text-white rounded-lg">Available Exams</Link>
                <Link to="/student/results" className="p-4 bg-green-500 text-white rounded-lg">View Results</Link>
            </div>
        </div>
    );
};

export default Dashboard;
