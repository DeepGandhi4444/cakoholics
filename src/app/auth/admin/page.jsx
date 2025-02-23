"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password123") {
      // Set a cookie for authentication
      Cookies.set("adminLoggedIn", "true", { expires: 1, path: "/" });

      router.push("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-md w-full bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
        {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <label className="block">Username:
            <input 
              type="text" 
              className="w-full p-2 border rounded mt-1" 
              placeholder="Enter username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          
          <label className="block">Password:
            <input 
              type="password" 
              className="w-full p-2 border rounded mt-1" 
              placeholder="Enter password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
