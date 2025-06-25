import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import loginImage from "../../assets/log-image.jpg";
import { useNavigate } from "react-router-dom"; // ✅ import

export default function Login() {
  const navigate = useNavigate(); // ✅ initialize

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password })
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      console.log("Login successful:", data);
      localStorage.setItem("token", data.token);

      // ✅ Redirect to /snapfix
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
          <h2 className="text-3xl font-semibold mb-6">Log into your account</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}

            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                // placeholder="you@example.com"
                className="w-full px-4 py-2 bg-[#0f1115] text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                // placeholder="Password"
                className="w-full px-4 py-2 bg-[#0f1115] text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>

            <button
              type="button"
              className="w-full mt-3 flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-[#1e2027] transition"
            >
              <FcGoogle className="text-xl" />
              <span>Login with Google</span>
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
          </p>

          <p className="mt-4 text-xs text-center text-gray-500">
            By continuing, you agree to Terms of Service & Privacy Policy.
          </p>
        </div>
      </div>

      {/* <div className="w-1/2 flex items-center justify-center">
        <img src={loginImage} alt="Login Visual" className="w-full h-full object-cover" />
      </div> */}
    </div>
  );
}
