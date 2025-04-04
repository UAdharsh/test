import React, { useState } from "react";

const CreateStudent = ({ onCreate }) => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(form);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Create Student</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Name" className="border p-2 w-full" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" className="border p-2 w-full" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" className="border p-2 w-full" onChange={handleChange} required />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create</button>
            </form>
        </div>
    );
};

export default CreateStudent;
