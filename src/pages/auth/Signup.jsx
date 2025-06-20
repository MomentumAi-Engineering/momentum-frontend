import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import signupImage from "../../assets/log-image.jpg";
import { useNavigate } from "react-router-dom"; 

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      return setError("Passwords don't match!");
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      console.log("Signup successful:", data);
      localStorage.setItem("token", data.token);

      // ✅ Redirect to /snapfix after signup
      navigate(data.redirectTo || "/snapfix");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0f1115] text-white">
      <div className="w-1/2 flex items-center justify-center px-8">
        <div className="bg-[#16181d] shadow-lg rounded-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}

            <div>
              <label htmlFor="name" className="block text-sm mb-1">Full Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 bg-[#0f1115] text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email Address</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-[#0f1115] text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-1">Password</label>
              <input
                id="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 bg-[#0f1115] text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm mb-1">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter Password"
                className="w-full px-4 py-2 bg-[#0f1115] text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-2 bg-white text-black rounded-md"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>

            <button
              type="button"
              className="w-full mt-3 flex items-center justify-center gap-2 border py-2 rounded-md"
            >
              <FcGoogle className="text-xl" />
              <span>Sign up with Google</span>
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400 text-center">
            Already have an account? <a href="/signin" className="text-blue-500">Sign in</a>
          </p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <img src={signupImage} alt="Signup Visual" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
