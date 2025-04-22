import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';

function Product() {
  const { productId } = useParams();
  const { products ,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const currency = '$'; 
  const [size,setSize] = useState('');

  const fetchProductData = () => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image || '/path/to/default/image.jpg'} alt='Product Image' />
          </div>
        </div>
        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <p className='mt-5 text-3xl font-medium'>
            {currency}{productData.price}
          </p>
          <p className='mt-5 text-gray-500 md:w-1/2'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-[#d1a28e]' : 'border-gray-300'}`}
                  key={index}
                >
                  {item}
                </button>
                ))}
              </div>
          </div>
          <button
  onClick={() => {
    if (!size) {
      alert("Please select a size");
      return;
    }
    addToCart(productData._id, size);
  }}
  className="bg-black text-white px-5 py-2 text-sm rounded hover:bg-gray-800 transition-colors duration-200"
>
  ADD TO CART
</button>

          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is availble on this product.</p>
            <p>Easy return and exchange policy with in 7 days.</p>
          </div>
        </div>
      </div>
      {/*--------Description & Review Section -----------*/}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-4 py-2 text-sm'>Description</b>
          <p className='border px-4 py-2 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Refresh your style with our latest collection of fashion-forward clothing and accessories.
          From elegant essentials to standout pieces, each item is crafted to bring comfort, quality, and confidence to your everyday look. Whether you're keeping it casual or going all out, our range helps you create the perfect outfit for every mood and moment.
          </p>
         <p> Enjoy a smooth shopping experience, secure checkout, and fast delivery — all from the comfort of your home.</p>
        </div>
      </div>

        {/*----------display related products-------- */}

          <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  );
}

export default Product;
