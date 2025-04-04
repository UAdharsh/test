import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ResultAnalysis = ({ results }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Exam Results Analysis</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={results}>
                    <XAxis dataKey="student" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="score" fill="#007bff" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResultAnalysis;
