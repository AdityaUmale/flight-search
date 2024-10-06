
import { Check, Loader } from 'lucide-react';

const LoadingState = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-[400px] mx-auto mt-10">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 mb-4">
          
          <svg>...</svg>
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Check className="text-green-500 mr-2" size={16} />
            <span>Searching 400+ flights</span>
          </div>
          <div className="flex items-center">
            <Check className="text-green-500 mr-2" size={16} />
            <span>Attaching company rules</span>
          </div>
          <div className="flex items-center">
            <Loader className="text-gray-400 mr-2 animate-spin" size={16} />
            <span>Serving best results</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;