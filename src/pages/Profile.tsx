import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { UserCircle, Mail, Shield, Calendar } from 'lucide-react';

export default function Profile() {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-32"></div>
        <div className="px-8 pb-8 relative">
          <div className="absolute -top-16 bg-white p-2 rounded-full shadow-lg">
            <div className="bg-blue-100 p-4 rounded-full">
              <UserCircle className="w-16 h-16 text-blue-600" />
            </div>
          </div>

          <div className="pt-20">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{user?.username || 'User Profile'}</h1>
            <p className="text-gray-500 flex items-center gap-2 mb-8">
              <Mail className="w-4 h-4" />
              {user?.email || 'No email provided'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Account Status</h3>
                </div>
                <p className="text-gray-600">Active and fully verified</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Member Since</h3>
                </div>
                <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-gray-600 text-lg text-center font-medium">
                "Welcome to your profile! This is a simple display page as requested."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
