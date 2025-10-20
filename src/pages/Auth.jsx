import React, { useState } from 'react';
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const API_URL = 'http://localhost:5000/api/auth';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setMessage({ type: '', text: '' });
  };

  const validateForm = () => {
    if (!isSignIn) {
      if (!formData.name.trim()) {
        setMessage({ type: 'error', text: 'Please enter your name' });
        return false;
      }
      if (!formData.phone.trim() || !/^[0-9]{10}$/.test(formData.phone)) {
        setMessage({ type: 'error', text: 'Please enter a valid 10-digit phone number' });
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setMessage({ type: 'error', text: 'Passwords do not match' });
        return false;
      }
    }

    if (!formData.email.trim() || !/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(formData.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return false;
    }

    if (!formData.password || formData.password.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const endpoint = isSignIn ? '/login' : '/register';
      const payload = isSignIn 
        ? { email: formData.email, password: formData.password }
        : { 
            name: formData.name, 
            email: formData.email, 
            phone: formData.phone, 
            password: formData.password 
          };

      const response = await fetch(${API_URL}${endpoint}, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ 
          type: 'success', 
          text: isSignIn ? 'Login successful!' : 'Account created successfully!' 
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
        });

        setTimeout(() => {
          console.log('Token:', data.token);
          console.log('User:', data.user);
        }, 1500);
      } else {
        setMessage({ type: 'error', text: data.message || 'Something went wrong' });
      }
    } catch (error) {
      console.error('Auth error:', error);
      setMessage({ type: 'error', text: 'Unable to connect to server. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setIsSignIn(!isSignIn);
    setMessage({ type: '', text: '' });
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-8 px-4">
      <div className="mb-8 mt-4">
        <h1 className="text-4xl font-bold">
          <span className="text-black">amazon</span>
          <span className="text-orange-500">.in</span>
        </h1>
      </div>

      <div className="w-full max-w-sm border border-gray-300 rounded-lg shadow-sm p-6 bg-white">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            {isSignIn ? 'Sign in' : 'Create Account'}
          </h2>
          {!isSignIn && (
            <p className="text-sm text-gray-600">
              Your name, mobile number and password
            </p>
          )}
        </div>

        {message.text && (
          <div className={`mb-4 p-3 rounded flex items-center gap-2 text-sm ${
            message.type === 'error' 
              ? 'bg-red-50 text-red-800 border border-red-200' 
              : 'bg-green-50 text-green-800 border border-green-200'
          }`}>
            {message.type === 'error' ? <AlertCircle size={16} /> : <CheckCircle size={16} />}
            <span>{message.text}</span>
          </div>
        )}

        <div className="space-y-4">
          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="First and last name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isSignIn ? 'Email or mobile phone number' : 'Email address'}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              placeholder="Email address"
            />
          </div>

          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="10-digit mobile number"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="At least 6 characters"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {isSignIn && (
              <p className="text-xs text-gray-600 mt-1">
                Passwords must be at least 6 characters.
              </p>
            )}
          </div>

          {!isSignIn && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                placeholder="Re-enter password"
              />
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 rounded transition duration-200 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Please wait...' : (isSignIn ? 'Continue' : 'Create Account')}
          </button>
        </div>

        <p className="text-xs text-gray-600 mt-4 leading-relaxed">
          By creating an account or logging in, you agree to Amazon's{' '}
          <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
            Conditions of Use
          </a>
          {' '}and{' '}
          <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
            Privacy Notice
          </a>
          .
        </p>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        {isSignIn ? (
          <div className="space-y-3">
            <button
              type="button"
              className="w-full border border-gray-300 py-2 rounded hover:bg-gray-50 transition text-sm font-medium text-gray-700"
            >
              Need help?
            </button>
            <div className="border-t border-gray-300 pt-3">
              <p className="text-sm text-gray-700 mb-3">Buying for work?</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                Shop on Amazon Business
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={switchMode}
                className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                Sign in »
              </button>
            </p>
            <div className="border-t border-gray-300 pt-3">
              <p className="text-sm text-gray-700 mb-3">Buying for work?</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                Create a free business account
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center text-xs text-gray-600 space-y-1">
        <div className="space-x-3">
          <a href="#" className="hover:text-blue-600">Conditions of Use</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-600">Privacy Notice</a>
          <span>|</span>
          <a href="#" className="hover:text-blue-600">Help</a>
        </div>
        <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>

      <button
        onClick={switchMode}
        className="mt-6 px-6 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
      >
        {isSignIn ? 'Create Account' : 'Already have account? Sign In'}
      </button>
    </div>
  );
}