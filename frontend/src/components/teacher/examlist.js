import React from "react";

const ExamList = ({ exams }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Exams</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Subject</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exams.map((exam, index) => (
                        <tr key={index} className="border border-gray-300">
                            <td className="p-2">{exam.title}</td>
                            <td className="p-2">{exam.subject}</td>
                            <td className="p-2">
                                <button className="bg-green-500 text-white p-2 rounded">Edit</button>
                                <button className="bg-red-500 text-white p-2 ml-2 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExamList;
