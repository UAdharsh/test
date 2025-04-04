import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Statistics = ({ data }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Admin Statistics</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#007bff" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
