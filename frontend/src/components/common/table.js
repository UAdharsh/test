import React from "react";

const Table = ({ columns, data }) => {
    return (
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-100">
                    {columns.map((col) => (
                        <th key={col} className="border border-gray-300 p-2">{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className="border border-gray-300">
                        {columns.map((col) => (
                            <td key={col} className="p-2">{row[col]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
