import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); 
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        } else {
            setError(data.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input type="email" name="email" placeholder="Email" required
                    className="border p-2 w-full mb-2" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" required
                    className="border p-2 w-full mb-2" onChange={handleChange} />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
                <p className="mt-2 text-sm">
                    <a href="/register" className="text-blue-500">Register</a> |  
                    <a href="/forgot-password" className="text-blue-500"> Forgot Password?</a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
