import React from 'react';
import { FaUserCircle } from 'react-icons/fa';


export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Panel */}
          <div className="md:w-1/4 md:pr-4 mb-4 md:mb-0">
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <FaUserCircle size="4rem" className="mx-auto mb-2" />
              <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
              <p className="text-gray-600">Software Engineer</p>
              <p className="text-gray-600">New York City</p>
              <div className="flex justify-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          {/* Right Panel */}
          <div className="md:w-3/4">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Dashboard
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Dashboard Cards */}
                <div className="bg-green-500 text-white rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Total Sales</h3>
                  <p className="text-4xl font-bold">2500</p>
                </div>
                <div className="bg-blue-500 text-white rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Total Orders</h3>
                  <p className="text-4xl font-bold">1000</p>
                </div>
                <div className="bg-purple-500 text-white rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Total Customers</h3>
                  <p className="text-4xl font-bold">500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


