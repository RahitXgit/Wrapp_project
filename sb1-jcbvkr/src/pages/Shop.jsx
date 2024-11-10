import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

// At the top of Shop.jsx, make products available for import
export const products = [
  {
    id: 1,
    name: "Men's Classic T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    subcategory: "t-shirt",
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
    subcategory: "dress",
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
    subcategory: "shoes",
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
    subcategory: "shoes",
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
    subcategory: "shoes",
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
    subcategory: "perfume",
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
    subcategory: "perfume",
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
    subcategory: "perfume",
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
    subcategory: "shirt",
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
    subcategory: "shirt",
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
    subcategory: "t-shirt",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Yellow', 'Blue', 'Red'],
    description: "cats printed t-shirt for kids"
  },
  {
    id: 12,
    name: "Ethnic Printed blue Kurta",
    price: 99,
    image: "https://www.jiomart.com/images/product/original/rvia7z6fs8/magastic-men-blue-solid-pure-cotton-ethnic-dress-product-images-rvia7z6fs8-0-202212121359.jpg?im=Resize=(500,630)",
    category: "Mens",
    subcategory: "ethnic kurta",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Blue'],
    description: "Ethnic printed blue kurta"
  }, 
  {
    id: 13,
    name: "Plain Orange Kurta",
    price: 109,
    image: "https://apisap.fabindia.com/medias/20183322-02.jpg?context=bWFzdGVyfGltYWdlc3w5OTEyMXxpbWFnZS9qcGVnfGFEaGxMMmhqTlM4Mk5USXpNREF3T1RFek9USXpNQzh5TURFNE16TXlNbDh3TWk1cWNHY3xmZjA5OGFjYTY0MGI3MTNiYjAwNTdhY2E1ZDExMDlmMzBlM2VlMTJmNzhjNjIzMzJiOTU0NTA5M2Q0OWE5ZDE4",
    category: "Mens",
    subcategory: "ethnic kurta",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Orange', 'Peach'],
    description: "Ethnic plain orange kurta"
  }, 
  {
    id: 14,
    name: "White Sports Shirt & Jogger Set",
    price: 289.99,
    image: "https://images.pexels.com/photos/15868727/pexels-photo-15868727/free-photo-of-model-in-white-sportswear.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "men",
    subcategory: "Jogger",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Yellow', 'Blue', 'Red'],
    description: "Sports t-shirt and jogger for mens"
  },
  {
    id: 15,
    name: "Woman Orange Hoodie Sweater and Jogger Pants ",
    price: 389.99,
    image: "https://images.pexels.com/photos/13769337/pexels-photo-13769337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "women",
    subcategory: "hoodie and jogger set",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Yellow', 'Blue', 'Red'],
    description: "Hoodie Sewater and jogger pant for womens"
  },
  {
    id: 16,
    name: "Black Leather Full-zip Jacket",
    price: 599.99,
    image: "https://images.pexels.com/photos/983497/pexels-photo-983497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "men",
    subcategory: "Jacket",
    sizes: ['S', 'M', 'L', 'XL'],
    //colors:['Yellow', 'Blue', 'Red'],
    description: "Man in Black Leather Full-zip Jacket"
  },
  {
    id: 17,
    name: "Women's Beige Peep-toe Heeled Sandals ",
    price: 499.99,
    image: "https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "women",
    subcategory: "Sandals",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Yellow', 'Blue', 'Red'],
    description: "Pair of Women's Beige Peep-toe Heeled Sandals "
  },
  {
    id: 18,
    name: "Women White Sports Shoe ",
    price: 499.99,
    image: "https://images.pexels.com/photos/26088459/pexels-photo-26088459/free-photo-of-close-up-of-a-woman-tying-her-shoe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "women",
    subcategory: "Sports Shoe",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Yellow', 'Blue', 'Red'],
    description: "Pair of Women's white sports shoe "
  },
  {
    id: 19,
    name: "Men's kurta ",
    price: 399.99,
    image: "https://images.pexels.com/photos/8217728/pexels-photo-8217728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "men",
    subcategory: "ethnic wear",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Yellow', 'Blue', 'Red'],
    description: "Kurta in minimalistic design "
  },
  {
    id: 20,
    name: "Men's formal shirt ",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1603252109612-24fa03d145c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    category: "men",
    subcategory: "Formal Shirt",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Black', 'Blue', 'Grey'],
    description: " formal shirt for men "
  },
  {
    id: 21,
    name: "Men's Leather Jacket ",
    price: 599.99,
    image: "https://images.pexels.com/photos/20232807/pexels-photo-20232807/free-photo-of-model-in-a-brown-leather-jacket-and-gray-sweater-posing-on-a-footbridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "men",
    subcategory: "Jacket",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Black', 'Blue', 'Grey'],
    description: " Browen Jacket for men "
  },
  // Add more mock products as needed
];

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // Update category when URL changes
  useEffect(() => {
    const category = searchParams.get('category');
    setSelectedCategory(category || 'all');
  }, [searchParams]);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryChange = (newValue) => {
    setSelectedCategory(newValue);
    // Use setSearchParams instead of manual URL manipulation
    if (newValue === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: newValue });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
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
                <p className="text-gray-600">₹{product.price}</p>
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