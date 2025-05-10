import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Alpine Backpack Pro',
    category: 'Backpacks',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    reviewCount: 124,
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'TrekDry Hiking Jacket',
    category: 'Clothing',
    price: 179.99,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    reviewCount: 98,
    tag: 'New Arrival',
  },
  {
    id: 3,
    name: 'SummitPro Hiking Boots',
    category: 'Footwear',
    price: 229.99,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    reviewCount: 156,
    tag: 'Top Rated',
  },
  {
    id: 4,
    name: 'ThermaShield Camping Tent',
    category: 'Camping',
    price: 299.99,
    image: 'https://images.pexels.com/photos/2582818/pexels-photo-2582818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    reviewCount: 87,
    tag: 'Limited Stock',
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular gear, hand-picked for quality, performance, and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative rounded-lg overflow-hidden mb-4">
                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                      {product.tag}
                    </span>
                  </div>
                )}
                
                {/* Image container */}
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white text-emerald-800 hover:bg-emerald-800 hover:text-white p-3 rounded-full shadow-lg">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div>
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-medium text-gray-800 text-lg mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-800">${product.price}</span>
                  <div className="flex items-center">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-medium rounded-md transition-all transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;