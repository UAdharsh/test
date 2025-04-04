import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="bg-gray-200 p-4 w-64 h-screen">
            <nav>
                <ul className="space-y-2">
                    <li><Link to="/" className="block p-2 hover:bg-gray-300">Dashboard</Link></li>
                    <li><Link to="/exams" className="block p-2 hover:bg-gray-300">Exams</Link></li>
                    <li><Link to="/results" className="block p-2 hover:bg-gray-300">Results</Link></li>
                    <li><Link to="/subjects" className="block p-2 hover:bg-gray-300">Subjects</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
