import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import type { RootState } from '../store';
import { logout } from '../features/authSlice';
import { UserCircle, Package, LogOut } from 'lucide-react';

export default function Sidebar() {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col h-screen p-4 border-r border-gray-800 shadow-xl transition-all">
      <div className="mb-8 mt-4 bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-inner flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-full">
          <UserCircle className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-bold truncate text-gray-100">{user?.username || 'Guest'}</h2>
          <p className="text-xs text-gray-400 truncate">{user?.email || 'Not logged in'}</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${isActive
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`
          }
        >
          <Package className="w-5 h-5" />
          Product List
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${isActive
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`
          }
        >
          <UserCircle className="w-5 h-5" />
          Profile Page
        </NavLink>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors font-medium"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
