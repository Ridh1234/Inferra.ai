import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

function GoogleSuccess() {
  const navigate = useNavigate();
  const { state } = useAuthContext();

  useEffect(() => {
    if (!state?.user) {
      navigate('/login');
      return;
    }
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
    return () => clearTimeout(timer);
  }, [state.user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="card max-w-md text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircleIcon className="h-10 w-10 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
          Welcome to Inferra.ai!
        </h1>
        
        <p className="text-secondary-600 mb-6">
          You've successfully signed in. Redirecting you to your intelligent meeting dashboard...
        </p>
        
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600 mr-3"></div>
          <span className="text-sm text-secondary-500">Loading your dashboard</span>
        </div>
      </div>
    </div>
  );
}

export default GoogleSuccess;