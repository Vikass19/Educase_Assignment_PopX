import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[246.44px] h-[533.2px] border border-gray-400 p-5 relative bg-white">
        
        
        <div className="absolute bottom-[25px] left-0 w-full px-4">
          
          <div className="text-start  ">
            <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit,
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-2">
            <Link to='/signup' className="w-full px-2 py-2 bg-purple-700 text-white text-center font-semibold rounded cursor-pointer transition-all">
              Create Account
            </Link>
            <Link to='/login' className="w-full text-center px-2 py-2 bg-purple-200 text-sm font-semibold text-black rounded transition-all">
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
