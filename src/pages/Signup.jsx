import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* Container */}
      <div className="w-[250px] h-[533px] border border-gray-400 p-4 relative bg-white overflow-y-auto overflow-x-hidden">
        
        <div className="text-start">
          <h1 className="text-xl font-semibold text-gray-900">
            Create your <br /> PopX account
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Please fill in the details below
          </p>
        </div>

        {/* Signup Form */}
        <div className="mt-4 space-y-4">
          
          <div className="relative">
            <label
              htmlFor="fullname"
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          
          <div className="relative">
            <label
              htmlFor="phone"
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:outline-none"
            />
          </div>

         
          <div className="relative">
            <label
              htmlFor="company"
              className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600"
            >
              Company Name
            </label>
            <input
              id="company"
              type="text"
              placeholder="Enter company name"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-1 focus:outline-none"
            />
          </div>

          
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-700">
              Are you an Agency? <span className="text-red-500">*</span>
            </p>
            <div className="flex items-center gap-4 mt-1">
              <label className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  className="accent-purple-600 w-4 h-4"
                />{" "}
                Yes
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  className="accent-purple-600 w-4 h-4"
                />{" "}
                No
              </label>
            </div>
          </div>
        </div>

        
        <div className="mt-12">
          <button className="w-full py-2 bg-purple-600 hover:bg-sky-600 text-white text-sm tracking-wider font-semibold rounded-md cursor-pointer transition">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
