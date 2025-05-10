import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeUp">
            Discover the Great Outdoors
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 animate-fadeUp animation-delay-200">
            Gear up for your next adventure with premium outdoor apparel 
            designed for comfort, durability, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeUp animation-delay-400">
            <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-all transform hover:scale-105">
              Shop Collection
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-emerald-800 text-white font-medium rounded-md transition-all">
              Explore Adventures
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;