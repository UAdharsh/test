import React from "react";

const ManageStudents = ({ students }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Manage Students</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index} className="border border-gray-300">
                            <td className="p-2">{student.name}</td>
                            <td className="p-2">{student.email}</td>
                            <td className="p-2">
                                <button className="bg-blue-500 text-white p-2 rounded">Edit</button>
                                <button className="bg-red-500 text-white p-2 ml-2 rounded">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageStudents;
