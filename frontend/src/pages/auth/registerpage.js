import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "student" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            navigate("/login");
        } else {
            setError(data.message || "Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4">Register</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input type="text" name="name" placeholder="Full Name" required
                    className="border p-2 w-full mb-2" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required
                    className="border p-2 w-full mb-2" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" required
                    className="border p-2 w-full mb-2" onChange={handleChange} />
                <select name="role" className="border p-2 w-full mb-2" onChange={handleChange}>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
                <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">Register</button>
                <p className="mt-2 text-sm">
                    Already have an account? <a href="/login" className="text-blue-500">Login</a>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
