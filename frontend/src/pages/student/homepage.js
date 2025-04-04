import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
            <div className="grid grid-cols-2 gap-4">
                <Link to="/student/exams" className="bg-blue-500 text-white p-4 rounded">Available Exams</Link>
                <Link to="/student/results" className="bg-green-500 text-white p-4 rounded">View Results</Link>
            </div>
        </div>
    );
};

export default HomePage;
