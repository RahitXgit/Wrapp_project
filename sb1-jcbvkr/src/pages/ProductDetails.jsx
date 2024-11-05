// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { ShoppingCart, Heart } from 'lucide-react';
// import { useCart } from '../context/CartContext';
// import { useWishlist } from '../context/WishlistContext';
// import { products } from './Shop';  // Import the products array

// // Mock product data (in a real app, this would come from an API)
// // const product = {
// //   id: 1,
// //   name: "Men's Classic T-Shirt",
// //   price: 29.99,
// //   description: "A comfortable and stylish t-shirt made from 100% cotton.",
// //   image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
// //   category: "men",
// //   sizes: ['S', 'M', 'L', 'XL'],
// //   colors: ['White', 'Black', 'Gray']
// // };

// function ProductDetails() {
//   const { id } = useParams();
//   const { addToCart } = useCart();
//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
//   const [selectedSize, setSelectedSize] = React.useState('');
//   const [selectedColor, setSelectedColor] = React.useState('');

//     // Find the product based on the URL parameter
//     const product = products.find(p => p.id === parseInt(id)) || products[0];
function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState('');

  console.log('URL ID:', id);
  console.log('URL ID type:', typeof id);
  
  const product = products.find(p => p.id === parseInt(id));
  
  console.log('Found product:', product);

  if (!product) {
    return <div>Product not found</div>;
  }

  // const isInWishlist = wishlist.find(item => item.id === product.id);
  // ...rest of the code

  const isInWishlist = wishlist.find(item => item.id === product.id);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color');
      return;
    }
    addToCart({ ...product, size: selectedSize, color: selectedColor });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          <div>
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Color</h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedColor === color
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-gray-300'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button
              onClick={() => {
                if (isInWishlist) {
                  removeFromWishlist(product.id);
                } else {
                  addToWishlist(product);
                }
              }}
              className={`p-3 border rounded-md ${
                isInWishlist ? 'text-red-500' : 'text-gray-600'
              }`}
            >
              <Heart className={isInWishlist ? 'fill-current' : ''} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;