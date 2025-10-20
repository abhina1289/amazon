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

  // ✅ Corrected handleSubmit
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

      // ✅ Correct line — template literal fixed
      const response = await fetch(`${API_URL}${endpoint}`, {
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

        {/* Rest of your JSX remains unchanged */}
      </div>
    </div>
  );
}
