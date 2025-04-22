import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets ';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch} = useContext(ShopContext) ;
    const [visible,setVisible] = useState(false)
    const location = useLocation();
    

    useEffect(()=>{
        if (location.pathname.includes('collection') ){
            setVisible(true);
        }
        else {
            setVisible(false)
        }
    },[location])



  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-25 text-center'>
  <div className='inline-flex items-center justify-center border border-gray-300 px-4 py-1 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
    {/* Smaller input field */}
    <input 
      value={search} 
      onChange={(e) => setSearch(e.target.value)} 
      className='flex-1 outline-none bg-inherit text-sm px-2 py-1 rounded-l-full' 
      type='text' 
      placeholder='Search' 
    />
    {/* Smaller search icon */}
    <img className='w-4 ml-2 cursor-pointer' src={assets.interface_1} alt='search icon' />
  </div>
  {/* Close icon */}
  <img 
    onClick={() => setShowSearch(false)} 
    className='inline w-4 cursor-pointer' 
    src={assets.cancel_4} 
    alt='cancel search' 
  />
</div>

  
  ) : null
}

export default SearchBar
