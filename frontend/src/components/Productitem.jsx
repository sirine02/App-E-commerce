import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  const imageUrl = Array.isArray(image) && image.length > 0 ? image[0] : '/default.jpg';

  return (
    <Link className="text-black cursor-pointer" to={id ? `/product/${id}` : '#'}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full h-[350px] object-cover hover:scale-110 transition-transform duration-300 ease-out"
          src={imageUrl}
          alt={name || 'Product image'}
        />
      </div>
      <p className="pt-3 pb-1 text-sm truncate">{name || 'No name available'}</p>
      <p className="text-sm font-medium">
        {currency ? `${currency}${price}` : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price || 0)}
      </p>
    </Link>
  );
};

export default ProductItem;
