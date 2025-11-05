import { useState } from 'react';
import { Eye, EyeOff, Fingerprint } from 'lucide-react';
import exampleImage from 'figma:asset/2fa747668284ad4f10fbcd4c34315837715972b8.png';

interface LoginProps {
  onLogin: () => void;
  onSignup: () => void;
}

export function Login({ onLogin, onSignup }: LoginProps) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-6 max-w-lg mx-auto w-full">
        <div className="flex justify-center mb-8">
          <img
            src={exampleImage}
            alt="Welcome"
            className="w-56 h-56 object-contain"
          />
        </div>

        <div className="mb-8">
          <h2 className="text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to continue to your wallet</p>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-900 mb-2 text-sm">Phone Number</label>
            <input
              type="tel"
              placeholder="+263 77 123 4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-900 mb-2 text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 text-gray-900"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="text-blue-600 text-sm">Forgot Password?</button>
          </div>
        </div>

        <button
          onClick={onLogin}
          className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors mb-4"
        >
          Sign In
        </button>

        <button
          onClick={onLogin}
          className="w-full bg-white border border-gray-200 text-gray-700 py-4 rounded-xl hover:bg-gray-50 transition-colors mb-6 flex items-center justify-center gap-2"
        >
          <Fingerprint size={24} className="text-blue-600" />
          Use Biometric
        </button>

        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <button onClick={onSignup} className="text-blue-600">
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
}
