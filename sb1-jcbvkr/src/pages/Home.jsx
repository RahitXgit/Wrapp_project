import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">New Season Arrivals</h1>
            <p className="text-xl mb-8">Check out all the trends</p>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard
            title="Men's Collection"
            image="https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="/shop?category=men"
          />
          <CategoryCard
            title="Women's Collection"
            image="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="/shop?category=women"
          />
          <CategoryCard
            title="Kids Collection"
            image="https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            link="/shop?category=kids"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FeaturedProduct
              name="Converse All Star High Top"
              price={159.99}
              image="https://images.unsplash.com/photo-1561909848-977d0617f275?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              id={3}
            />

            <FeaturedProduct
              name="Nike Green"
              price={200}
              image="https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              id={4}
            />
            <FeaturedProduct
              name="Stripes Asics"
              price={180}
              image="https://images.unsplash.com/photo-1575456456278-936c89ccdb7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              id={5}
            />
            {/* Add more featured products here */}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-900 rounded-lg py-12 px-6 md:py-16 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to our newsletter</h2>
          <p className="text-gray-300 mb-8">Get the latest updates on new products and upcoming sales</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ title, image, link }) {
  return (
    <Link to={link} className="group relative overflow-hidden rounded-lg">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

function FeaturedProduct({ name, price, image, id }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="w-full h-80 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">${price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Home;