import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
  const handleLogout = () => {
    setToken('');
    alert('Logout pressed');
  };

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img src={assets.Vivienne_logo} alt="Logo" width="180" />
      <button
        onClick={handleLogout}
        className='bg-[#f1dabc] border-[#d2b48c] rounded-full px-3 py-1'
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
