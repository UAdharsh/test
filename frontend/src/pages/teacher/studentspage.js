import React, { useEffect, useState } from "react";

const StudentsPage = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/teacher/students")
            .then(res => res.json())
            .then(data => setStudents(data))
            .catch(err => console.error("Error fetching students:", err));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Manage Students</h2>
            <ul className="list-disc pl-6">
                {students.map(student => (
                    <li key={student._id} className="p-2 border rounded bg-gray-100 mb-2">{student.name} - {student.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentsPage;
