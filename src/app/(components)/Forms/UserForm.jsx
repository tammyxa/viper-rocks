// Component that displays the form for creating a new user
"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    passwordHash: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try { 
      const res = await fetch("/api/users/Create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          passwordHash: formData.passwordHash,
        }),
      });
      

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(`Error: ${errorResponse.message} - ${errorResponse.error}`);
    }

    router.refresh();
    router.push("/AboutUs");
    
  } catch (error) {
    setErrorMessage(error.message);
  }
  };


  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col gap-3 w-1/2"
      >
        <h1>Create New User</h1>
        <label>Full Name</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.username}
          className="m-2 bg-slate-400 rounded"
        />
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.email}
          className="m-2 bg-slate-400 rounded"
        />
        <label>Password</label>
        <input
          id="passwordHash"
          name="passwordHash"
          type="password"
          onChange={handleChange}
          required={true}
          value={formData.passwordHash}
          className="m-2 bg-slate-400 rounded"
        />
        <input
          type="submit"
          value="Create User"
          className="m-2 bg-blue-300 hover:bg-blue-100"
        />
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default UserForm;