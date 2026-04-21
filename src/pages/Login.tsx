import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/authSlice';
import { Lock, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      const username = email.split('@')[0];
      dispatch(login({ username, email }));
      navigate('/products');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] p-4 sm:p-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/10 relative z-10">
        
        {/* Left Side: Premium Graphic / Hero Area */}
        <div className="hidden md:flex flex-col justify-between w-1/2 p-12 lg:p-16 relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 text-white">
          {/* Subtle overlay image */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200&h=1200" 
              alt="Background texture" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 mb-8 shadow-xl">
              <Sparkles className="w-8 h-8 text-blue-200" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Elevate your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                shopping experience.
              </span>
            </h1>
            <p className="text-blue-100/80 text-lg max-w-md font-medium">
              Access premium collections, exclusive deals, and personalized recommendations.
            </p>
          </div>

          {/* Floating glass card */}
          <div 
            className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mt-12 transition-transform duration-500 ease-out transform"
            style={{ transform: isHovered ? 'translateY(-10px)' : 'translateY(0)' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center gap-4">
              <div className="bg-emerald-500/20 p-3 rounded-full">
                <ShieldCheck className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Secure Access</h3>
                <p className="text-sm text-blue-200/70">End-to-end encrypted authentication</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 bg-white flex flex-col justify-center relative">
          <div className="max-w-md w-full mx-auto">
            <div className="text-center md:text-left mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Welcome back</h2>
              <p className="text-gray-500 font-medium">Please enter your details to sign in.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-5">
                <div className="group relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-blue-600">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 focus:bg-white transition-all text-gray-900 font-medium outline-none"
                      placeholder="admin@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="group relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-blue-600">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 focus:bg-white transition-all text-gray-900 font-medium outline-none tracking-wide"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 focus:ring-offset-0 cursor-pointer" />
                  <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Remember for 30 days</span>
                </label>
                <button type="button" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-4 px-4 rounded-xl shadow-xl shadow-gray-900/20 transition-all flex items-center justify-center gap-2 group mt-8 active:scale-[0.98]"
              >
                Sign In to Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-8 text-center">
                <p className="text-sm font-medium text-gray-500">
                  Don't have an account?{' '}
                  <button type="button" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    Sign up
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
