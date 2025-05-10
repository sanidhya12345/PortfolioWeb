import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-lg md:text-xl mb-8">
            Sign up for our newsletter and be the first to know about new products, 
            exclusive offers, and outdoor inspiration.
          </p>
          
          <form className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 text-gray-800"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-all transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-3 text-gray-300">
              By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;