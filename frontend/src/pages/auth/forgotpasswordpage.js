import React, { useState } from "react";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (response.ok) {
            setMessage("Password reset link sent to your email.");
        } else {
            setMessage(data.message || "Error sending reset link.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
                {message && <p className="text-green-500">{message}</p>}
                <input type="email" name="email" placeholder="Enter your email" required
                    className="border p-2 w-full mb-2" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Send Reset Link</button>
                <p className="mt-2 text-sm">
                    <a href="/login" className="text-blue-500">Back to Login</a>
                </p>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;
