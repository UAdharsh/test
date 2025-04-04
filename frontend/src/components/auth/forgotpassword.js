import React, { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Request failed");

            setMessage("Password reset link sent to your email.");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="bg-yellow-500 text-white p-2 rounded w-full">
                    Send Reset Link
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
