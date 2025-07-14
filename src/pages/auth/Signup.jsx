import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, User, Mail, Lock, Check } from 'lucide-react';

const CLIENT_ID = "682691449006-5rden5no17tj6aeuel4ef5q76vsh6kol.apps.googleusercontent.com";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleGoogleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          setIsLoading(true);
          const response = await fetch('http://localhost:5000/api/auth/google/callback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code })
          });

          const data = await response.json();

          if (response.ok) {
            localStorage.setItem('token', data.token);
            window.location.href = data.redirectTo || '/snapfix';
          } else {
            setError(data.message || 'Google authentication failed');
          }
        } catch (err) {
          setError('Google authentication failed: ' + err.message);
        } finally {
          setIsLoading(false);
        }
      }
    };

    handleGoogleCallback();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    const errorDescription = urlParams.get('error_description');

    if (error) {
      setError(errorDescription || 'Google authentication failed');
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setError('');
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords don't match!");
    }

    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      localStorage.setItem("token", data.token);
      window.location.href = data.redirectTo || "/snapfix";
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    const redirectUri = "http://localhost:5173/auth/callback/";
    const scope = "openid profile email";
    const responseType = "code";

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=offline&prompt=consent`;

    window.location.href = authUrl;
  };

  const isPasswordMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword;
  const isFormValid = formData.fullName && formData.email && formData.password && formData.confirmPassword && isPasswordMatch;

  return (
    <div className="min-h-[100vh] bg-black flex items-center justify-center py-8 px-4 relative overflow-hidden overflow-y-auto">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-md">
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 shadow-2xl">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-white mb-1">Sign Up</h1>
            <p className="text-gray-400">Create your account to get started</p>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-900/20 border border-red-500/50 rounded-xl text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            {/* Full Name */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${focusedField === 'fullName' ? 'border-purple-500 bg-gray-800/70' : 'border-gray-700'}`}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${focusedField === 'email' ? 'border-purple-500 bg-gray-800/70' : 'border-gray-700'}`}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full pl-12 pr-12 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${focusedField === 'password' ? 'border-purple-500 bg-gray-800/70' : 'border-gray-700'}`}
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('confirmPassword')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full pl-12 pr-12 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${focusedField === 'confirmPassword' ? 'border-purple-500 bg-gray-800/70' : 'border-gray-700'}`}
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {formData.confirmPassword && (
                  <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
                    {isPasswordMatch ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-red-400"></div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isFormValid || isLoading}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 relative overflow-hidden group ${isFormValid && !isLoading ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] hover:-translate-y-1' : 'bg-gray-700 cursor-not-allowed'}`}
            >
              <div className="relative z-10">
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing Up...
                  </div>
                ) : (
                  'Sign Up'
                )}
              </div>
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center py-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative bg-gray-900 px-4 text-sm text-gray-400">or continue with</div>
            </div>

            {/* Google Signup */}
            <button
              type="button"
              onClick={handleGoogleSignup}
              className="w-full flex items-center justify-center py-3 px-4 border border-gray-700 rounded-xl text-white font-medium transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 relative overflow-hidden group hover:border-gray-600 hover:bg-gray-800/50 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/10"
            >
              <div className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign up with Google
              </div>
            </button>
          </div>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{' '}
            <a href="/signin" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
