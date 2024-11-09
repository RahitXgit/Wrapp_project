import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ShoppingCart, Heart } from 'lucide-react';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div className="flex items-center justify-center h-full">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto object-cover rounded-lg" />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">₹{product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="font-semibold">Sizes:</span>
            <span className="ml-2">{product.sizes.join(', ')}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold">Colors:</span>
            <span className="ml-2">{product.colors.join(', ')}</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => addToCart(product)}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button
              onClick={() => {
                if (wishlist.find(item => item.id === product.id)) {
                  removeFromWishlist(product.id);
                } else {
                  addToWishlist(product);
                }
              }}
              className="p-2 text-gray-600 hover:text-red-500 transition-colors duration-300"
            >
              <Heart
                className={`h-6 w-6 ${
                  wishlist.find(item => item.id === product.id)
                    ? 'fill-current text-red-500'
                    : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;