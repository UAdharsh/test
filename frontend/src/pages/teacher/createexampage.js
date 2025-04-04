import React, { useState } from "react";

const CreateExamPage = () => {
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [questions, setQuestions] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExam = { title, subject, questions };

        await fetch("http://localhost:5000/api/exams", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newExam),
        });

        setTitle("");
        setSubject("");
        setQuestions([]);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Create Exam</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Exam Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" />
                <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full p-2 border rounded" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Exam</button>
            </form>
        </div>
    );
};

export default CreateExamPage;
