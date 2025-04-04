import React from "react";

const Results = ({ results }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Results</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Exam</th>
                        <th className="border p-2">Score</th>
                        <th className="border p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result, index) => (
                        <tr key={index} className="border border-gray-300">
                            <td className="p-2">{result.examTitle}</td>
                            <td className="p-2">{result.score} / {result.total}</td>
                            <td className={`p-2 ${result.passed ? "text-green-500" : "text-red-500"}`}>
                                {result.passed ? "Passed" : "Failed"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Results;
