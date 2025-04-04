import React, { useEffect, useState } from "react";

const ValidatePage = () => {
    const [pendingUsers, setPendingUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/users/pending")
            .then(res => res.json())
            .then(data => setPendingUsers(data))
            .catch(err => console.error("Error fetching pending users:", err));
    }, []);

    const validateUser = async (userId) => {
        await fetch(`http://localhost:5000/api/users/validate/${userId}`, {
            method: "POST",
        });
        setPendingUsers(pendingUsers.filter(user => user._id !== userId));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Validate User Accounts</h2>
            <ul>
                {pendingUsers.map(user => (
                    <li key={user._id} className="p-2 border rounded bg-gray-100 mb-2 flex justify-between">
                        {user.name} - {user.email}
                        <button onClick={() => validateUser(user._id)} className="bg-green-500 text-white p-1 rounded">
                            Approve
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ValidatePage;
