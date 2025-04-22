import React, { useState } from 'react';
import axios from 'axios';
import { assets } from '../assets/assets';

const Add = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [imagePreviews, setImagePreviews] = useState([null, null, null, null]);
  const [images, setImages] = useState([null, null, null, null]);

  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...images];
      const updatedPreviews = [...imagePreviews];
      updatedImages[index] = file;
      updatedPreviews[index] = URL.createObjectURL(file);
      setImages(updatedImages);
      setImagePreviews(updatedPreviews);
    }
  };

  const handleSizeToggle = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", productName);
  formData.append("description", productDescription);
  formData.append("category", category);
  formData.append("subCategory", subCategory);
  formData.append("price", price);
  formData.append("sizes", JSON.stringify(sizes));
  formData.append("bestseller", bestseller);

  // Ajoute les images avec les bons noms (image1, image2, etc.)
  if (images[0]) formData.append("image1", images[0]);
  if (images[1]) formData.append("image2", images[1]);
  if (images[2]) formData.append("image3", images[2]);
  if (images[3]) formData.append("image4", images[3]);

  try {
    const response = await axios.post(
      'http://localhost:4000/api/product/add',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,  
          'Content-Type': 'multipart/form-data', 
        }

      }
    );
    console.log("✅ Produit ajouté avec succès :", response.data);
    alert("Produit ajouté avec succès !");
  } catch (error) {
    console.error("❌ Erreur lors de l'ajout du produit:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Erreur lors de l'ajout du produit.");
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Add a New Product</h1>

        {/* Upload Images */}
        <div>
          <p className="mb-2">Upload Images</p>
          <div className="flex gap-4 justify-center">
            {[0, 1, 2, 3].map((index) => (
              <label key={index} htmlFor={`image-${index}`}>
                <div className="w-20 h-20 border rounded-md overflow-hidden cursor-pointer">
                  <img
                    className="w-full h-full object-cover"
                    src={imagePreviews[index] || assets.cloud_up}
                    alt={`Upload ${index + 1}`}
                  />
                </div>
                <input
                  type="file"
                  id={`image-${index}`}
                  hidden
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, index)}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Product Name */}
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium">Product Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Type product name here"
            required
          />
        </div>

        {/* Product Description */}
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium">Product Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Write product description"
            rows={4}
            required
          />
        </div>

        {/* Product Options */}
        <div className="space-y-4 mt-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Product Category</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Sub Category</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            >
              <option value="Summerwear">Summerwear</option>
              <option value="Winterwear">Winterwear</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Product Price ($)</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="25"
              required
            />
          </div>
        </div>

        {/* Product Sizes */}
        <div className="mt-4">
          <p className="mb-2 font-medium">Product Sizes</p>
          <div className="flex gap-3">
            {["S", "M", "L", "XL"].map((size) => (
              <p
                key={size}
                onClick={() => handleSizeToggle(size)}
                className={`px-4 py-1 rounded cursor-pointer border transition ${
                  sizes.includes(size) ? 'bg-blue-300' : 'bg-slate-200 hover:bg-slate-300'
                }`}
              >
                {size}
              </p>
            ))}
          </div>

          <div className="flex gap-2 mt-3 items-center">
            <input
              type="checkbox"
              id="bestseller"
              checked={bestseller}
              onChange={() => setBestseller(!bestseller)}
            />
            <label htmlFor="bestseller" className="cursor-pointer">
              Add to bestseller
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full px-4 py-2 bg-[#f1d5b0] text-black rounded-md hover:bg-[#f9d19d] transition"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default Add;
