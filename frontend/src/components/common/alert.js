import React from "react";

const Alert = ({ message, type }) => {
    const alertColors = {
        success: "bg-green-500",
        error: "bg-red-500",
        warning: "bg-yellow-500",
    };

    return (
        <div className={`p-4 text-white ${alertColors[type] || "bg-gray-500"}`}>
            {message}
        </div>
    );
};

export default Alert;
