import React from "react";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../../assets/log-image.jpg"; // adjust name if needed

export default function Login() {
  return (
    <div className="min-h-screen flex bg-[#0f1115] text-white">
      {/* Left: Login Form */}
      <div className="w-1/2 flex items-center justify-center px-8">
        <div className="bg-[#16181d] shadow-lg rounded-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6">Log into your account</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-[#0f1115] text-white border border-[#2c2f36] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 bg-[#0f1115] text-white border border-[#2c2f36] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-2 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition"
            >
              Log In
            </button>

            <button
              type="button"
              className="w-full mt-3 flex items-center justify-center gap-2 border border-[#2c2f36] py-2 rounded-md hover:bg-[#1e2027] transition"
            >
              <FcGoogle className="text-xl" />
              <span>Login with Google</span>
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>

          <p className="mt-4 text-xs text-center text-gray-500">
            By continuing, you agree to MomentumAI's{" "}
            <a href="#" className="underline hover:text-gray-400">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-gray-400">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-1/2 flex items-center justify-center">
        <img src={loginImage} alt="Login Visual" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
