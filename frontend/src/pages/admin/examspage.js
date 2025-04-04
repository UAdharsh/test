import React, { useEffect, useState } from "react";

const ExamsPage = () => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/exams")
            .then(res => res.json())
            .then(data => setExams(data))
            .catch(err => console.error("Error fetching exams:", err));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Manage Exams</h2>
            <ul className="list-disc pl-6">
                {exams.map(exam => (
                    <li key={exam._id} className="p-2 border rounded bg-gray-100 mb-2">
                        {exam.title} - {exam.subject}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExamsPage;
