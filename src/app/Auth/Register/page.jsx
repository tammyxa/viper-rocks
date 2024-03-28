'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function RegisterPage() {
  const router = useRouter();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();


     // Access form values from the data state
     const { email, password } = data;

    // Perform registration logic (e.g., send data to a server)
    console.log('Registration submitted:', { email, password });

    // Reset form fields after submission
    setData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
  );
};


