import React, { useState } from "react";

const CreateExam = ({ onCreate }) => {
    const [exam, setExam] = useState({ title: "", subject: "", questions: [] });

    const handleChange = (e) => {
        setExam({ ...exam, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(exam);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Create Exam</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="title" placeholder="Exam Title" className="border p-2 w-full" onChange={handleChange} required />
                <input type="text" name="subject" placeholder="Subject" className="border p-2 w-full" onChange={handleChange} required />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Exam</button>
            </form>
        </div>
    );
};

export default CreateExam;
