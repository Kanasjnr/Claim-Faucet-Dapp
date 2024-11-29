import React, { useState } from "react";
import useCreateFaucet from "../hooks/useCreateFaucet";

const CreateFaucet = () => {
  const handleFaucetDeployment = useCreateFaucet();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { name, symbol } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleFaucetDeployment(name, symbol);
    setFormData({
      name: "",
      symbol: "",
    });
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      >
        Create Cosmic Faucet
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md border border-blue-500 shadow-lg shadow-blue-500/50">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">New Cosmic Faucet</h2>
            <p className="text-blue-200 mb-6">Launch your interstellar token faucet</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-300 mb-1">
                  Faucet Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Enter your  faucet name"
                  className="w-full px-3 py-2 bg-gray-700 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="symbol" className="block text-sm font-medium text-blue-300 mb-1">
                  Faucet Symbol
                </label>
                <input
                  type="text"
                  id="symbol"
                  name="symbol"
                  value={symbol}
                  onChange={handleChange}
                  placeholder="Enter your faucet symbol"
                  className="w-full px-3 py-2 bg-gray-700 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-700 text-blue-300 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  Launch Faucet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateFaucet;

