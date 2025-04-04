import React, { useEffect, useState } from "react";

const ResultsPage = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/teacher/results")
            .then(res => res.json())
            .then(data => setResults(data))
            .catch(err => console.error("Error fetching results:", err));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Results Analysis</h2>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border">Student</th>
                        <th className="p-2 border">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => (
                        <tr key={result._id} className="text-center border">
                            <td className="p-2 border">{result.student}</td>
                            <td className="p-2 border">{result.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultsPage;
