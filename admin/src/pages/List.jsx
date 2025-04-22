import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(response.data.products || []);
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error.response?.data || error.message);
      setError("Impossible de charger les produits.");
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/product/remove`, {
        data: { id: productId },
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      // Mise à jour de la liste après suppression
      setProducts((prev) => prev.filter((p) => p._id !== productId));
      toast.success("Produit supprimé avec succès !");
    } catch (error) {
      console.error("Erreur lors de la suppression :", error.response?.data || error.message);
      toast.error("Erreur lors de la suppression du produit.");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center mb-6">All Products List</h2>

      {error && <p className="text-center text-red-500">{error}</p>}

      {products.length === 0 && !error ? (
        <p className="text-center text-gray-500">Aucun produit trouvé.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={index} className="border p-3 rounded shadow-sm">
              <img
                src={product.imageUrls?.[0] || "/default-image.jpg"}
                alt={product.productName}
                className="w-full h-40 object-cover rounded mb-2"
              />

              <h3 className="text-lg font-semibold text-center">{product.productName}</h3>
              <p className="text-sm text-gray-600 text-center">{product.category}</p>
              <p className="text-center font-medium mt-1">${product.price}</p>

              {product.sizes?.length > 0 && (
                <div className="text-center mt-2 text-sm text-gray-500">
                  Tailles : {product.sizes.join(', ')}
                </div>
              )}

              <button
                onClick={() => handleDelete(product._id)}
                className="mt-3 bg-[#f1d5b0] text-black px-3 py-1 rounded hover:bg-[#fcdeb9] block mx-auto"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
