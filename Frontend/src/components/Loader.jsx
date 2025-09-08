import { ArrowPathIcon } from '@heroicons/react/24/outline';

function Loader() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-gray-50'>
      <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
        <span className="text-2xl font-bold text-primary-600">I</span>
      </div>
      <ArrowPathIcon className="animate-spin h-8 w-8 text-primary-500 mb-4" />
      <p className="text-lg font-medium text-secondary-700">Loading Inferra.ai...</p>
      <p className="text-sm text-secondary-500 mt-2">Initializing your meeting intelligence platform</p>
    </div>
  );
}

export default Loader;