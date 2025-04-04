import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            <div className="grid grid-cols-2 gap-4">
                <Link to="/admin/users" className="p-4 bg-blue-500 text-white rounded-lg">Manage Users</Link>
                <Link to="/admin/exams" className="p-4 bg-green-500 text-white rounded-lg">Manage Exams</Link>
                <Link to="/admin/results" className="p-4 bg-purple-500 text-white rounded-lg">View Results</Link>
                <Link to="/admin/statistics" className="p-4 bg-yellow-500 text-white rounded-lg">View Statistics</Link>
            </div>
        </div>
    );
};

export default Dashboard;
