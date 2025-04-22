import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets ';

import Title from '../components/Title';
import ProductItem from '../components/Productitem';

function Collection() {
  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType,setSortType] = useState ('relavent')

  // Fonction pour basculer la sélection de catégorie
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Fonction pour basculer la sélection de sous-catégorie
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Fonction pour appliquer les filtres
  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))  
     }

    // Appliquer le filtre des catégories
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    // Appliquer le filtre des sous-catégories
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory)); // Assurez-vous que le nom est 'subCategory' (en minuscule)
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high' :
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price))) ;
        break;

      case 'high-low' :
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))  ;
        break;

      default:
        applyFilter();
        break;
    }

  }





  useEffect(() => {
    applyFilter(); 
  }, [category, subCategory,search,showSearch]);

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-6 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-[250px]'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-2xl font-semibold text-gray-800 flex items-center cursor-pointer gap-3'>
          FILTERS
          <img
            className={`h-4 sm:hidden ${showFilter ? 'rotate-90 transform' : ''}`}
            src={assets.drop_down}
            alt='toggle filter'
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 rounded-lg p-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-lg font-medium text-gray-700 mb-4'>Categories</p>
          <div className='flex flex-col gap-3'>
            <label className='flex items-center gap-2 text-sm text-gray-600'>
              <input className='form-checkbox h-4 w-4' type='checkbox' value='Men' onChange={toggleCategory} />
              Men
            </label>

            <label className='flex items-center gap-2 text-sm text-gray-600'>
              <input className='form-checkbox h-4 w-4' type='checkbox' value='Women' onChange={toggleCategory} />
              Women
            </label>

            <label className='flex items-center gap-2 text-sm text-gray-600'>
              <input className='form-checkbox h-4 w-4' type='checkbox' value='Kids' onChange={toggleCategory} />
              Kids
            </label>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 rounded-lg p-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-lg font-medium text-gray-700 mb-4'>Subcategories</p>
          <div className='flex flex-col gap-3'>
            <label className='flex items-center gap-2 text-sm text-gray-600'>
              <input className='form-checkbox h-4 w-4' type='checkbox' value='SummerWear' onChange={toggleSubCategory} />
              Summerwear
            </label>

            <label className='flex items-center gap-2 text-sm text-gray-600'>
              <input className='form-checkbox h-4 w-4' type='checkbox' value='WinterWear' onChange={toggleSubCategory} />
              Winterwear
            </label>

            <label className='flex items-center gap-2 text-sm text-gray-600'>
              <input className='form-checkbox h-4 w-4' type='checkbox' value='Accessories' onChange={toggleSubCategory} />
              Accessories
            </label>
          </div>
        </div>
      </div>

      {/* Right Side (Product List) */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-[#d1a28e] text-sm px-5'>
            <option value='relavent'>Sort by: Relavent</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          ) : (
            <p>Aucun produit trouvé avec les filtres sélectionnés.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
