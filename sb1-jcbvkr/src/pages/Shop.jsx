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
    id: 22,
    name: "Women's Lahenga",
    price: 2000,
    image: "https://images.unsplash.com/photo-1642956359855-91b7205faf37?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "women",
    subcategory: "ethnic wear",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Blue', 'Peach'],
    description: "Women festive lahenga"
  },
  {
    id: 23,
    name: "Women's Saree ",
    price: 50,
    image: "https://i.pinimg.com/564x/1f/57/63/1f5763a5be9c46ddf46f0e156fb34426.jpg",
    category: "women",
    subcategory: "ethnic wear",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Blue', 'Green', 'Peach'],
    description: "Women festive red saree with embroidery"
  },
  {
    id: 24,
    name: "Embellished Sequinned Ready to Wear Saree",
    price: 55,
    image: "https://i.pinimg.com/564x/ce/11/25/ce11253669604579e96d4da859df2d1f.jpg",
    category: "women",
    subcategory: "ethnic wear",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Red'],
    description: "Women embellished sequinned saree for festive occasions"
  },
  {
    id: 25,
    name: "Charm Pink Soft Pure Organza Handwork With Digital Print Saree",
    price: 55,
    image: "https://i.pinimg.com/736x/d1/43/c1/d143c1b53fdfe0e1134ae689ddea79b3.jpg",
    category: "women",
    subcategory: "ethnic wear",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Blue', 'Black'],
    description: "Women pink soft organza saree for festive occasions" 
  },
  {
    id: 26,
    name: "Women's Knee-high boots",
    price: 50,
    image: "https://i.pinimg.com/564x/56/0f/bb/560fbb87aed7d47ae0df06d789dc06b6.jpg",
    category: "women",
    subcategory: "High boots",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Blue', 'White'],
    description: "A pair of regular boots, has high-top ankle and zip fastening"
  },
  {
    id: 27,
    name: "Girls Heels ",
    price: 50,
    image: "https://i.pinimg.com/564x/54/54/d3/5454d3b1dd5ada2f9bb8103071e83486.jpg",
    category: "women",
    subcategory: "Heels",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['White', 'Pink'],
    description: "A pair of gold-toned heels"
  },
  {
    id: 28,
    name: "Embellished Lace Up High Heels",
    price: 50,
    image: "https://i.pinimg.com/564x/a0/36/c4/a036c4a5e1071de57855198608ed8abb.jpg",
    category: "women",
    subcategory: "Heels",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Red'],
    description: "A pair of synthetic embellished lace up high heels "
  },
  {
    id: 29,
    name: "Women's Casual Shirt",
    price: 52,
    image: "https://i.pinimg.com/564x/d0/42/9c/d0429cac634e67425ed0f39b55d30513.jpg",
    category: "women",
    subcategory: "Shirt",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Black'],
    description: "Comfortable and stylish Spread collar shirt"
  },
  {
    id: 30,
    name: "Sweetheart Neck Top",
    price: 58,
    image: "https://i.pinimg.com/564x/38/55/74/38557427dfc1164dc352ac5b1fddef35.jpg",
    category: "women",
    subcategory: "Top",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['White'],
    description: "A comfortable and stylish top made from 100% cotton."
  },
  {
    id: 31,
    name: "Polka Dot Butterfly Sleeve Top ",
    price: 58,
    image: "https://i.pinimg.com/564x/fa/05/86/fa0586f99d2d456871ed10d64c581d5f.jpg",
    category: "women",
    subcategory: "Top",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Black'],
    description: "Stylish and comfortable top with polka dots"
  },
  {
    id: 32,
    name: "Bershka's collection of women's jackets",
    price: 60,
    image: "https://i.pinimg.com/564x/08/33/92/0833925dda428583e9bbaf280fb049fd.jpg",
    category: "women",
    subcategory: "jacket",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Black'],
    description: "Bershka's collection of women's jackets for winter season"
  },
  {
    id: 33,
    name: "Kid's ethnic wear",
    price: 50,
    image: "https://i.pinimg.com/564x/34/73/33/3473334e45d43802d152190822922aa4.jpg",
    category: "kids",
    subcategory: "ethnic wear",
    sizes: ['S', 'M', 'L', 'XL'],
    colors:['Blue'],
    description: "ethnic wear for kids"
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