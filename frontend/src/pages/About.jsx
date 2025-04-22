import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets '
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-16 px-4 sm:px-8 lg:px-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Image */}
    <div className="w-full md:max-w-[500px]">
      <img src={assets.about_1} alt="About Vivienne" className="rounded-lg shadow-md w-full object-cover" />
    </div>

    {/* Text */}
    <div className="flex flex-col gap-6 text-gray-700">
      <h2 className="text-3xl font-semibold text-gray-900">Discover the World of Vivienne</h2>
      <p className="text-base leading-relaxed">
        Welcome to <span className="font-medium text-black">Vivienne</span>,  your ultimate online destination for discovering a diverse range of clothing and accessories from top brands.

We curate the latest collections from established labels and emerging designers, offering a wide selection of styles to suit every personality and occasion. Whether you're searching for trendy statement pieces, everyday essentials, or standout accessories — we’ve got you covered.
      </p>
      <p className="text-base leading-relaxed">
      Our mission is to bring you a seamless shopping experience, genuine branded products, and customer support that truly cares. All of this, within a stylish and inspiring space you’ll love coming back to.
        Our platform is built to offer you a smooth, secure, and inspiring shopping experience.
      </p>
      <p className="italic text-sm text-gray-500">“Fashion is what you buy, style is what you do with it.”</p>
    </div>
  </div>
</div>
<div className="bg-[#fdfaf7] py-12 px-4 md:px-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 text-center">
      Our Values
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white border border-[#f2e9e4] p-6 rounded-md shadow-sm">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Authenticity</h3>
        <p className="text-sm text-gray-600">
          We work with trusted brands to ensure each piece is original and crafted with care.
        </p>
      </div>

      <div className="bg-white border border-[#f2e9e4] p-6 rounded-md shadow-sm">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Inclusivity</h3>
        <p className="text-sm text-gray-600">
          Fashion for all. We embrace diverse styles, bodies, and stories.
        </p>
      </div>

      <div className="bg-white border border-[#f2e9e4] p-6 rounded-md shadow-sm">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Simplicity</h3>
        <p className="text-sm text-gray-600">
          From shopping to styling, we keep things effortless and enjoyable.
        </p>
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

export default About
