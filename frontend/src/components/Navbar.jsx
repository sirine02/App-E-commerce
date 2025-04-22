import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets '
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {

    const [visible,setVisible] = useState(false);

    const {setShowSearch , getCartCount ,navigate, token, setToken, setCartItems} = useContext(ShopContext);

    const Logout = () =>{
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
       
    }




  return (
    <div className='flex items-center justify-between py-0.05 font-medium'>
      
        <Link to='/'> <img src={assets.Vivienne_logo} className='w-48 ' alt=''  /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-black'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-3/4 border-none h-[2px] bg-black hidden'/>
            </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>Collection</p>
                <hr className='w-3/4 border-none h-[2px] bg-black hidden'/>
            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1 '>
                <p>About</p>
                <hr className='w-3/4 border-none h-[2px] bg-black hidden'/>
            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-3/4 border-none h-[2px] bg-black hidden'/>
            </NavLink>


        </ul>

        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.interface_1} className='w-5 cursor-pointer' alt='' />

                <div className='group relative'>
                   <Link to='/login'> <img className='w-5 cursor-pointer'  src={assets.profile_1} alt='' /> </Link>
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-black rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Ordres</p>
                            <p onClick={Logout} className='cursor-pointer hover:text-black'>Logout</p>

                        </div>
                    </div>
                </div>

                <Link to='./cart' className='relative'>
                    <img src={assets.shoppingcart} className='w-5 min-w-5' alt='' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-2 text-center leading-3  bg-black text-white aspect-square rounded-full text-[7px]'>{getCartCount()}</p>
                </Link>
               <img onClick={()=>setVisible(true)} src={assets.menu_1} className='w-4 cursor-pointer' alt='' />
        </div>

        {/* Sidebar menu for small screens */}
        <div
       className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}
      >
        <div className='flex flex-col text-black'>
            <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3'>
                <img className='h-8 rotate-180' src={assets.fleche_1} alt='' />
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
            </div>

        </div>
</div>
    
    
     
  )
}

export default Navbar
