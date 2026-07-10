import React, { useState } from 'react';
import { Search } from 'lucide-react'; 

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      
      {/* 1. Left Side: Logo and Brand Name */}
      
        <div className="w-12 h-12 rounded-full border-2 border-gray-600 bg-white flex items-center justify-center overflow-hidden">
          <img 
            src="/softnova-logo.png" 
            className="w-10 h-10 object-contain"
            alt="logo"
          />
          
        </div>
          <h1 className="text-2xl font-bold tracking-wide text-center flex-1">
        SoftNova <span className="text-[#e14d43]">Academy</span>
      </h1>
      

   
    

    

    </nav>
  );
};

export default Navbar;