import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets '
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      

      <div className='text-center text-2xl pt-10 border-t'>
            <Title text1={'CONTACT'} text2={'US'} />

      </div>
 
      <div className="bg-[#f7f7f7] py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left: Image */}
    <div className="w-full flex justify-center">
      <img
        src={assets.contact_us}
        alt="Contact Us"
        className="w-full max-w-md rounded-lg shadow-md"
      />
    </div>

    {/* Right: Contact & Careers Information */}
    <div className="flex flex-col gap-8">
      
      {/* Contact Information */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
        <p className="text-lg text-gray-600 mb-6">
          We are an online store, always here to assist you with anything you need.
        </p>
        <div className="text-lg text-gray-600">
          <p><strong>Tel:</strong> +216 000 000 000</p>
          <p><strong>Email:</strong> <a href="mailto:vivienne@gmail.com" className="text-[#b87e69] hover:underline">vivienne@gmail.com</a></p>
        </div>
      </div>

      {/* Careers Section */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Careers at Vivienne</h3>
        <p className="text-lg text-gray-600 mb-6">
          Join our growing team. We're always on the lookout for passionate and creative minds.
        </p>
        <button className="bg-[#d1a28e] text-white px-6 py-3 text-sm rounded-md hover:bg-[#edba97] transition duration-300 ease-in-out">
          Explore Careers
        </button>
      </div>
    </div>
  </div>
</div>
<div className="mt-16">
  <NewsletterBox />
</div>

    </div>
  )
}

export default Contact
