import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

// At the top of Shop.jsx, make products available for import
export const products = [
  {
    id: 1,
    name: "Men's Classic T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    description: "A comfortable and stylish t-shirt made from 100% cotton."
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    description: "A comfortable and stylish t-shirt made from 100% cotton."
  },
  {
    id: 3,
    name: "Converse All Star High Top",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1561909848-977d0617f275?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "men",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    description: "A comfortable and stylish t-shirt made from 100% cotton."
  },
  {
    id: 4,
    name: "Nike Green",
    price: 200,
    image: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "men",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    description: "A comfortable and stylish t-shirt made from 100% cotton."
  },
  {
    id: 5,
    name: "Stripes Asics",
    price: 180,
    image: "https://images.unsplash.com/photo-1575456456278-936c89ccdb7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "women",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    description: "A comfortable and stylish t-shirt made from 100% cotton."
  }
  ,
  {
    id: 6,
    name: "Luxury Perfume",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1681935703733-5e9df028a318?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "women",
    sizes: ['50ml', '100ml'],
    colors: ['Gold', 'Silver'],
    description: "An elegant fragrance with sophisticated notes for a lasting impression."
  }
  ,
  {
    id: 7,
    name: "Classic Chanel Perfume",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1506915925765-ed31516b9080?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "women",
    sizes: ['50ml', '100ml'],
    colors: ['Gold'],
    description: "A timeless and sophisticated fragrance that embodies luxury and elegance."
  }
  ,
  {
    id: 8,
    name: "Luxury Men's Cologne",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1611242956059-53e4c29e6b22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMHBlcmZ1bWVzfGVufDB8fDB8fHww",
    category: "men",
    sizes: ['50ml', '100ml'],
    colors: ['Black', 'Silver'],
    description: "A sophisticated men's fragrance with woody and spicy notes."
  },
  {
    id: 9,
    name: "Leopard Print Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "men",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White'],
    description: "A timeless white dress shirt perfect for formal occasions."
  },
  {
    id: 10,
    name: "Maroon Kids Dress",
    price: 9.99,
    image: "https://images.meesho.com/images/products/364720956/0pf1y_1200.jpg",
    category: "kids",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Maroon'],
    description: "A comfortable and stylish t-shirt made from 100% cotton."
  },
  {
    id: 11,
    name: "Printed Kids T-Shirt",
    price: 19.99,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfA8eZWirP9UQlLtjbHhz0XnBc2jhoR82A9rmfeZS5s2vHfpNI6MvrjLG0ZV003nMBcgcNaWltOlJdPTU1lFDagpG5c1HVruI047SEuQM2LRMDTH35GYoON-Y",
    category: "kids",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Yellow', 'Blue', 'Red'],
    description: "cats printed t-shirt for kids"
  }
  // Add more mock products as needed
];

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-md px-4 py-2"
        >
          <option value="all">All Categories</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
            <div className="p-4 pt-0 mt-4 flex justify-between">
              <button
                onClick={() => addToCart(product)}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
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
                className="p-2 text-gray-600 hover:text-red-500"
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
        ))}
      </div>
    </div>
  );
}

export default Shop;