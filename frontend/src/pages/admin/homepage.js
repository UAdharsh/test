import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            <div className="grid grid-cols-3 gap-4">
                <Link to="/admin/users" className="bg-blue-500 text-white p-4 rounded">Manage Users</Link>
                <Link to="/admin/subjects" className="bg-green-500 text-white p-4 rounded">Manage Subjects</Link>
                <Link to="/admin/exams" className="bg-yellow-500 text-white p-4 rounded">Manage Exams</Link>
                <Link to="/admin/validate" className="bg-purple-500 text-white p-4 rounded">Validate Accounts</Link>
                <Link to="/admin/stats" className="bg-red-500 text-white p-4 rounded">View Statistics</Link>
            </div>
        </div>
    );
};

export default HomePage;
