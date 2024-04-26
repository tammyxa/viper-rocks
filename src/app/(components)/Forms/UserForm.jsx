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
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  
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
  
  
    const passMatch = async (e) => {
      try{
        const value = e.target.value;
        const name = e.target.name;
  
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
  
        const password = String(value);
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]{8,}$/;
        const found = await regex.test(password);
        if (!found) {
          throw new Error("Password must meet the following requirements: \n - Minimum password length (8)\n - One uppercase and one lowercase \n - One special character \n - One number");
        } 
  
        setIsPasswordValid(true)
        setErrorMessage('')
    }
      catch(error){
        setIsPasswordValid(false)
        setErrorMessage(error.message);
      }
    };
  
  
    return (
      <>
      <div class="grid m-20 min-screen place-items-center">
        <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 class="font-semibold"> Sign Up </h1> <br></br>
          <h1 class="text-xl font-semibold">Hello there!<span class="font-normal"> Please fill in your information to continue</span></h1>
            <form class="mt-6" onSubmit={handleSubmit} method="POST">
              <label for="username" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Full Name</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="John Doe"
                  onChange={handleChange}
                  required={true}
                  value={formData.username}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                />
                
              <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@nasa.com"
                onChange={handleChange}
                required={true}
                value={formData.email}
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" 
              />
              <label for="passwordHash" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
              <input
                id="passwordHash"
                name="passwordHash"
                type="password"
                placeholder="*******"
                onChange={passMatch}
                required={true}
                value={formData.passwordHash}
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              />
              {errorMessage && <div style={{ color: 'red', whiteSpace: 'pre-line' }}>{errorMessage}</div>}
              <button
                type="submit"
                value="Create User"
                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                disabled={!isPasswordValid}>
                  Sign Up
              </button>  
          </form>
        </div>  
      </div>
      </>
    );
  };
  
  export default UserForm;