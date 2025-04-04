import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TakeExamPage = () => {
    const { examId } = useParams();
    const navigate = useNavigate();
    const [exam, setExam] = useState(null);
    const [answers, setAnswers] = useState({});
    
    useEffect(() => {
        fetch(`http://localhost:5000/api/student/exams/${examId}`)
            .then(res => res.json())
            .then(data => setExam(data))
            .catch(err => console.error("Error fetching exam:", err));
    }, [examId]);

    const handleSubmit = async () => {
        await fetch(`http://localhost:5000/api/student/submit-exam`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ examId, answers }),
        });
        navigate("/student/results");
    };

    if (!exam) return <p>Loading exam...</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{exam.title}</h2>
            {exam.questions.map((q, index) => (
                <div key={index} className="mb-4">
                    <p className="font-semibold">{q.question}</p>
                    {q.options.map((opt, i) => (
                        <label key={i} className="block">
                            <input type="radio" name={`q${index}`} value={opt} 
                                onChange={() => setAnswers({ ...answers, [index]: opt })} />
                            {opt}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">Submit Exam</button>
        </div>
    );
};

export default TakeExamPage;
