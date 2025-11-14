import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log({ email, password });
    setEmail("");
    setPassword("");
    console.log("Form Reset");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      
      <div className="w-full max-w-md bg-gray-800 border border-emerald-600 p-10 rounded-2xl shadow-xl flex flex-col items-center">

        <h1 className="text-3xl font-bold text-white mb-6">
          Login
        </h1>

        <form 
          onSubmit={submitHandler} 
          className="flex flex-col w-full gap-5"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="py-3 px-5 border border-emerald-600 rounded-full bg-transparent 
                       text-white placeholder-gray-300 focus:outline-none"
          />

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="py-3 px-5 border border-emerald-600 rounded-full bg-transparent 
                       text-white placeholder-gray-300 focus:outline-none"
          />

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 transition-all py-3 px-5 
                       rounded-full text-xl font-semibold text-white w-full shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-gray-300 mt-4 text-sm">
          Don’t have an account?{" "}
          <span className="text-emerald-400 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
