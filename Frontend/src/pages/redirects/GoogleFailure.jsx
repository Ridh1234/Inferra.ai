import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

function GoogleFailure() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="card max-w-md text-center animate-fade-in">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ExclamationTriangleIcon className="h-10 w-10 text-red-600" />
        </div>
        
        <h1 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
          Sign In Failed
        </h1>
        
        <p className="text-secondary-600 mb-6">
          We encountered an issue during sign in. Don't worry, we'll redirect you back to try again.
        </p>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700 text-sm">
            If this problem persists, please contact our support team.
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-600 mr-3"></div>
          <span className="text-sm text-secondary-500">Redirecting to sign in</span>
        </div>
      </div>
    </div>
  );
}

export default GoogleFailure;