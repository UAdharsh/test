import React from "react";

const ExamPreview = ({ exam }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Preview Exam</h2>
            <h3 className="text-lg font-semibold">{exam.title}</h3>
            <p className="text-gray-600">{exam.subject}</p>
            <ul className="mt-4">
                {exam.questions.map((question, index) => (
                    <li key={index} className="border p-2">{question.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExamPreview;
