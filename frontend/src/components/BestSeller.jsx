import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import ProductItem from './Productitem';
import { ShopContext } from '../Context/ShopContext';


const BestSeller = () => {
  
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]) ;
    useEffect(() => {
      console.log('Produits dans BestSeller (useEffect):', products); // Log des produits reçus
    
      if (Array.isArray(products) && products.length > 0) {
        console.log('Filtrage des produits best-sellers...');
    
        // Filtrage avec une vérification de la propriété bestSeller
        const bestProduct = products.filter(item => item.bestSeller === true || item.bestSeller === undefined);
    
        console.log('Produits filtrés (bestSeller):', bestProduct); // Log les produits best-sellers
    
        setBestSeller(bestProduct.slice(0, 5)); // Limiter à 5 produits
      }
    }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-black'> 
        Shop our most popular picks, loved for their quality, comfort, and timeless style
        </p>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
        }

      </div>

  </div>
  )
}

export default BestSeller
