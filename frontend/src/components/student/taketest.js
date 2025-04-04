import React, { useState } from "react";

const TakeExam = ({ exam, onSubmit }) => {
    const [answers, setAnswers] = useState({});

    const handleChange = (questionId, answer) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(answers);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{exam.title}</h2>
            <p className="text-gray-600 mb-4">{exam.subject}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                {exam.questions.map((question, index) => (
                    <div key={index} className="border p-4">
                        <p className="font-semibold">{question.text}</p>
                        {question.options.map((option, i) => (
                            <label key={i} className="block">
                                <input 
                                    type="radio" 
                                    name={question.id} 
                                    value={option} 
                                    onChange={() => handleChange(question.id, option)} 
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Submit Exam</button>
            </form>
        </div>
    );
};

export default TakeExam;
