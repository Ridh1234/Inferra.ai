import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

function Navbar() {
  const { state, dispatch } = useAuthContext();

  async function handleLogout() {
    await fetch("/api/oauth/logout");
    toast.success("Logged out!");
    dispatch({ type: "LOGOUT" });
  }

  return (
    <nav className="bg-white border-b border-gray-200 shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Inferra.ai logo */}
          <div className="flex items-center">
            <Link to="/" className="nav-hover group flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="logo-text text-2xl font-heading font-bold">
                Inferra.ai
              </span>
            </Link>
          </div>

          {/* Right side - Navigation links and user info */}
          <div className="flex items-center space-x-6">
            {state?.user ? (
              <>
                <Link 
                  to="/" 
                  className="text-secondary-600 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link 
                  to="/dashboard" 
                  className="text-secondary-600 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-medium text-sm">
                        {state.user.name?.charAt(0)?.toUpperCase()}
                      </span>
                    </div>
                    <span className="text-secondary-700 font-medium">
                      {state.user.name}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className="text-secondary-600 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link 
                  to="/login" 
                  className="btn-primary"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
