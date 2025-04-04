import React, { useEffect, useState } from "react";

const StatsPage = () => {
    const [stats, setStats] = useState({ users: 0, exams: 0, subjects: 0 });

    useEffect(() => {
        fetch("http://localhost:5000/api/stats")
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error("Error fetching statistics:", err));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">System Statistics</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-500 text-white p-4 rounded">Total Users: {stats.users}</div>
                <div className="bg-green-500 text-white p-4 rounded">Total Exams: {stats.exams}</div>
                <div className="bg-yellow-500 text-white p-4 rounded">Total Subjects: {stats.subjects}</div>
            </div>
        </div>
    );
};

export default StatsPage;
