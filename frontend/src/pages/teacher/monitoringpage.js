import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const MonitoringPage = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        socket.on("examActivity", (data) => {
            setStudents(data);
        });

        return () => {
            socket.off("examActivity");
        };
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Real-Time Exam Monitoring</h2>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border">Student</th>
                        <th className="p-2 border">Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id} className="text-center border">
                            <td className="p-2 border">{student.name}</td>
                            <td className="p-2 border">{student.activity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MonitoringPage;
