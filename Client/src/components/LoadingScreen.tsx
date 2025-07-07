import React from 'react';
import { Code2, Zap } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999] overflow-hidden">
      {/* Background with Green-Blue Mix */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black to-blue-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-green-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-1500"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-green-400/3 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-blue-400/3 rounded-full blur-xl animate-pulse delay-1200"></div>
      </div>
      
      <div className="text-center relative z-10">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg transform rotate-12 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg transform -rotate-12 animate-pulse delay-75"></div>
            <div className="relative bg-black rounded-lg w-full h-full flex items-center justify-center border border-gray-800">
              <Code2 className="w-12 h-12 text-green-400 animate-bounce" />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Zap className="w-6 h-6 text-green-400 animate-pulse" />
          <h2 className="text-2xl font-bold text-white">DSC Courses</h2>
          <Zap className="w-6 h-6 text-blue-400 animate-pulse" />
        </div>
        
        <div className="flex space-x-2 justify-center">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;