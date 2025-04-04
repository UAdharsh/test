import React from "react";

const ExamMonitoring = ({ students }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Exam Monitoring</h2>
            <ul className="border p-4">
                {students.map((student, index) => (
                    <li key={index} className={`p-2 ${student.active ? "bg-green-200" : "bg-red-200"}`}>
                        {student.name} - {student.active ? "Active" : "Inactive"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExamMonitoring;
