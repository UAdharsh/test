import React, { useEffect, useState } from "react";

const SubjectsPage = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/subjects")
            .then(res => res.json())
            .then(data => setSubjects(data))
            .catch(err => console.error("Error fetching subjects:", err));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Manage Subjects</h2>
            <ul className="list-disc pl-6">
                {subjects.map(subject => (
                    <li key={subject._id} className="p-2 border rounded bg-gray-100 mb-2">
                        {subject.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SubjectsPage;
