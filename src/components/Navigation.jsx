import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg border-b border-blue-500/30">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            SpaceFaucet
          </Link>
          <div className="flex items-center space-x-4">
            <Link 
              to="/faucets" 
              className={`text-blue-300 hover:text-blue-100 transition-colors ${location.pathname === '/faucets' ? 'border-b-2 border-blue-400' : ''}`}
            >
              Explore Faucets
            </Link>
            {/* <Link 
              to="/create" 
              className={`text-blue-300 hover:text-blue-100 transition-colors ${location.pathname === '/create' ? 'border-b-2 border-blue-400' : ''}`}
            >
              Create Faucet
            </Link> */}
            <appkit-button size="md" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

