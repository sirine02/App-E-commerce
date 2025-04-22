import React from 'react'
import { assets } from '../assets/assets '

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>

        <div>
            <img src={assets.Vivienne_logo} className='mb-5 w-32' alt='' />
            <p className='w-full md:w-2/3 text-gray-600'>
            Discover stylish clothes and accessories that blend comfort, quality, and the latest trends. Shop now and find your perfect look!
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us </li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>Contact Us</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+216 000 000 000</li>
                <li>Vivienne@gmail.com</li>
            </ul>
        </div>

      </div>

<div>

    <hr/>
    <p className='py-5 text-l text-center'> © 2025 Vivienne.com - All Rights Reserved.</p>
</div>
    </div>
  )
}

export default Footer
