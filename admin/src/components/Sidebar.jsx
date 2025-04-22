import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className="w-50 bg-white h-screen p-6 shadow-md">
      <div className="flex flex-col gap-4">
        {/* Add Items */}
        <NavLink to="/add" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200">
          <img className="w-5 h-5" src={assets.add_1} alt="Add Items" />
          <p className="text-sm">Add Items</p>
        </NavLink>

        {/* List Items */}
        <NavLink to="/list" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200">
          <img className="w-5 h-5" src={assets.order_1} alt="List Items" />
          <p className="text-sm">List Items</p>
        </NavLink>

        {/* Orders */}
        <NavLink to="/orders" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200">
          <img className="w-5 h-5" src={assets.order_1} alt="Orders" />
          <p className="text-sm">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
