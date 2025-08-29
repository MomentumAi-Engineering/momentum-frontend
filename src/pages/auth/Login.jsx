import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://momentum-backend-p68k.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      navigate(data.redirectTo || "/snapfix");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-md">
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Log In</h1>
            <p className="text-gray-400">Access your account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-xl text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${focusedField === "email" ? "border-purple-500 bg-gray-800/70" : "border-gray-700"}`}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
           {/* Password Field */}
<div className="relative">
  <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
  <div className="relative">
    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    <input
      type={showPassword ? "text" : "password"}
      id="password"
      value={form.password}
      onChange={handleChange}
      onFocus={() => setFocusedField("password")}
      onBlur={() => setFocusedField("")}
      className={`w-full pl-12 pr-12 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${focusedField === "password" ? "border-purple-500 bg-gray-800/70" : "border-gray-700"}`}
      placeholder="Enter your password"
      required
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
    >
      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
    </button>
  </div>

  {/* Forgot Password Link */}
  <div className="text-right mt-2">
    <a
      href="/forgot-password"
      className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
    >
      Forgot Password?
    </a>
  </div>
</div>


            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 relative overflow-hidden group ${!loading ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] hover:-translate-y-1' : 'bg-gray-700 cursor-not-allowed'}`}
            >
              <div className="relative z-10">
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Logging In...
                  </div>
                ) : (
                  "Log In"
                )}
              </div>
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative bg-gray-900 px-4 text-sm text-gray-400">
                or continue with
              </div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full mt-1 flex items-center justify-center gap-2 border border-gray-700 py-3 px-4 rounded-xl text-white transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 relative overflow-hidden group hover:border-gray-600 hover:bg-gray-800/50 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/10"
            >
              <FcGoogle className="text-xl" />
              <span>Login with Google</span>
            </button>
          </form>

          <p className="text-center text-gray-400 mt-8">
            Don't have an account?{" "}
            <a href="/signup" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
